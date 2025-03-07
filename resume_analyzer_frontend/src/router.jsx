import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import AnalysisResult from "./pages/AnalysisResult";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import JobMatching from "./pages/Job Matching";
import AdminPanel from "./pages/Admin Panel";
import SavedResumes from "./pages/Saved Resumes";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/savedResume" element={<ProtectedRoute><SavedResumes/></ProtectedRoute>} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/job-matching" element={<JobMatching />} /> 
        <Route path="/upload" element={<ProtectedRoute><UploadResume /></ProtectedRoute>} />
        <Route path="/result" element={<AnalysisResult />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
