import os
import re
import logging
import spacy
import phonenumbers
from pdfminer.high_level import extract_text
from docx import Document
from flask import Flask, request, jsonify
from flask_cors import CORS

# ✅ Initialize Flask app
app = Flask(__name__)

# ✅ Enable CORS properly
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

# File upload configuration
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Load spaCy Model
try:
    nlp = spacy.load('en_core_web_sm')
except OSError:
    os.system("python -m spacy download en_core_web_sm")
    nlp = spacy.load('en_core_web_sm')

# Helper function to check file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Extract text from PDF
def extract_text_from_pdf(file_path):
    try:
        return extract_text(file_path)
    except Exception as e:
        logging.error(f"Error extracting text from PDF: {e}")
        return ""

# Extract text from DOCX
def extract_text_from_docx(file_path):
    try:
        doc = Document(file_path)
        return "\n".join([p.text for p in doc.paragraphs])
    except Exception as e:
        logging.error(f"Error extracting text from DOCX: {e}")
        return ""

# Extract email using regex
def extract_email(text):
    email_pattern = r"[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+"
    emails = re.findall(email_pattern, text)
    return emails[0] if emails else "N/A"

# Extract phone number using phonenumbers
def extract_phone(text):
    for match in phonenumbers.PhoneNumberMatcher(text, "IN"):
        return phonenumbers.format_number(match.number, phonenumbers.PhoneNumberFormat.INTERNATIONAL)
    return "N/A"

# Extract skills (basic approach using predefined keywords)
def extract_skills(text):
    skills_list = ["Python", "Java", "C++", "Machine Learning", "React", "Django", "Flask", "SQL", "AWS"]
    found_skills = [skill for skill in skills_list if skill.lower() in text.lower()]
    return found_skills

# Extract name using spaCy
def extract_name(text):
    doc = nlp(text)
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            return ent.text
    return "N/A"

@app.route('/upload', methods=['POST'])
def upload_file():
    logging.debug(f"Received request: {request.method} {request.url}")
    logging.debug(f"Headers: {request.headers}")

    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if not allowed_file(file.filename):
        return jsonify({"error": "Unsupported file format. Please upload a PDF or DOCX file."}), 400

    logging.debug(f"Received file: {file.filename}")

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    try:
        if file.filename.endswith('.pdf'):
            text = extract_text_from_pdf(file_path)
        elif file.filename.endswith('.docx'):
            text = extract_text_from_docx(file_path)
        else:
            return jsonify({"error": "Invalid file format"}), 400

        if not text:
            raise ValueError("Failed to extract text from resume.")

        parsed_data = {
            "name": extract_name(text),
            "email": extract_email(text),
            "phone": extract_phone(text),
            "skills": extract_skills(text),
        }

        return jsonify({"filename": file.filename, "analysis": parsed_data})

    except Exception as e:
        logging.error(f"Error processing resume: {str(e)}", exc_info=True)
        return jsonify({"error": f"Failed to process resume: {str(e)}"}), 500

# Health check route
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Resume Analyzer Backend is Running!"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
