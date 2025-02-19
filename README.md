# AI-Powered Resume Analyzer

## 📌 Project Overview
The **AI-Powered Resume Analyzer** is a web application that allows users to upload resumes and receive automated analysis using AI-based Natural Language Processing (NLP). The system extracts key details, provides job-fit scores, and suggests improvements based on industry standards.

## 🚀 Features
- **Resume Parsing**: Extracts key details like name, email, skills, education, and experience.
- **AI-Powered Analysis**: Uses NLP to analyze resume quality and provide a job-fit score.
- **Job Matching**: Matches resumes with relevant job roles based on extracted skills.
- **Improvement Suggestions**: Provides feedback to enhance the resume.
- **Multi-Format Support**: Accepts PDF and DOCX formats.
- **User Authentication**: Sign-up/login to save resume analysis history.

## 🛠️ Tech Stack
### **Frontend** (React + Vite)
- React.js (Vite for Fast Development)
- React Router
- Redux Toolkit (State Management)
- Axios (API Requests)
- Material UI (Styling)

### **Backend** (Flask + Python)
- Flask (REST API)
- Flask-CORS (Cross-Origin Resource Sharing)
- Gemini API (For Resume Analysis)
- PDFMiner & python-docx (For Resume Parsing)
- TensorFlow/NLP Libraries (Text Processing)
- Firebase (Storage for User & Resume Data)

## 📂 Project Structure
```
AI-Resume-Analyzer/
│── backend/                # Backend Code (Flask + Python)
│   ├── uploads/             #for storing 
│   ├── utils/              # Helper Functions
│   ├── app.py              # Entry Point
│
│── frontend/               # Frontend Code (React + Vite)
│   ├── src/
│   │   ├── components/     # React Components
│   │   ├── pages/          # Pages
│   │   ├── router.jsx      # React Router Config
│   │   ├── App.jsx         # Root Component
│   │   ├── main.jsx        # Entry Point
│
│── README.md               # Documentation
│── package.json            # Dependencies
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Dsmita03/AI-Powered-Resume-Analyzer
```

### 2️⃣ Backend Setup
```sh
cd backend
pip install -r requirements.txt
python app.py  # Runs on http://127.0.0.1:5000
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev  # Runs on http://localhost:5173
```

## 🖥️ Pages Overview
- **Home Page**: Upload resumes, view past analyses.
- **Analysis Page**: Displays extracted details, job-fit score, and suggestions.
- **Login/Register**: User authentication.
- **Dashboard**: Manage saved resumes and job matches.

## 🌟 Future Enhancements
- Resume formatting suggestions.
- Support for LinkedIn profile analysis.
- Job recommendation system based on AI insights.

## 🤝 Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

---
Happy Coding! 🚀
