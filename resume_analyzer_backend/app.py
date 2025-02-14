from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load the pre-trained resume classifier (Assuming model.pkl exists)
MODEL_PATH = "model.pkl"
if os.path.exists(MODEL_PATH):
    model = joblib.load(MODEL_PATH)
else:
    model = None

@app.route("/")
def home():
    return jsonify({"message": "Resume Analyzer API is running"}), 200

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    
    # Here you can use NLP techniques to analyze the resume
    text = file.read().decode("utf-8")  # Read resume text
    prediction = model.predict([text]) if model else ["Unknown"]

    return jsonify({"analysis_result": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)
