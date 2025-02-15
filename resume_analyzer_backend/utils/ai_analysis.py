import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv() 

# OpenAI API Key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("❌ Missing OpenAI API key! Set OPENAI_API_KEY in .env file.")

openai.api_key = OPENAI_API_KEY  # Set OpenAI key

def analyze_resume_with_ai(skills):
    if not skills:
        return "No skills provided for analysis."

    skills_text = ", ".join(skills)
    prompt = f"Analyze the resume with these skills: {skills_text}. Provide job-fit score and improvement suggestions."

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an AI-powered resume analyzer."},
                {"role": "user", "content": prompt}
            ]
        )
        return response["choices"][0]["message"]["content"]

    except openai.error.OpenAIError as e:
        return f"❌ OpenAI API error: {str(e)}"

