import os
import google.generativeai as genai
from dotenv import load_dotenv

# ✅ Load environment variables
load_dotenv()

# ✅ Google Gemini API Key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("❌ Missing Google Gemini API key! Set GEMINI_API_KEY in .env file.")

# ✅ Configure Google Gemini
genai.configure(api_key=GEMINI_API_KEY)

def analyze_resume_with_ai(skills):
    """Analyze resume skills using Google Gemini and provide job-fit score & improvement suggestions."""
    if not skills or skills == ["None Detected"]:
        return "No relevant skills found in the resume."

    skills_text = ", ".join(skills)
    prompt = f"Analyze this resume based on the following skills: {skills_text}. Provide job-fit score and improvement suggestions."

    try:
        # ✅ Use Gemini Pro model
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(prompt)

        return response.text  # ✅ Gemini response format

    except Exception as e:
        return f"❌ Gemini API error: {str(e)}"
