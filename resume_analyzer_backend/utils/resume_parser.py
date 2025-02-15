import pdfminer.high_level
import docx
import re

def extract_text_from_pdf(pdf_path):
    return pdfminer.high_level.extract_text(pdf_path)

def extract_text_from_docx(docx_path):
    doc = docx.Document(docx_path)
    return "\n".join([para.text for para in doc.paragraphs])

def parse_resume(file_path):
    if file_path.endswith(".pdf"):
        text = extract_text_from_pdf(file_path)
    elif file_path.endswith(".docx"):
        text = extract_text_from_docx(file_path)
    else:
        return None

    name = re.search(r'Name:\s*(.*)', text)
    email = re.search(r'([\w\.-]+@[\w\.-]+)', text)
    phone = re.search(r'\b\d{10}\b', text)
    skills = re.findall(r'\b(Java|Python|React|AI|ML|Flask|Django)\b', text, re.IGNORECASE)

    return {
        "name": name.group(1) if name else "Unknown",
        "email": email.group(1) if email else "Unknown",
        "phone": phone.group(0) if phone else "Unknown",
        "skills": list(set([s.capitalize() for s in skills]))
    }
