import { useState } from "react";
import { Typography, Button, Box, Paper, Snackbar, Alert } from "@mui/material";
import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const navigate = useNavigate();  
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "application/pdf" || file.type.includes("word"))) {
      setSelectedFile(file);
      setError("");
    } else {
      setError("Please upload a valid PDF or DOCX file.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("✅ Upload Success:", response.data);
      setSuccess(true);
      setError("");
      navigate("/result", { state: { fileName: selectedFile.name } });

      
    } catch (error) {
      console.error("❌ Upload Failed:", error);
  
      if (error.response) {
        console.error("📌 Server Response:", error.response.status, error.response.data);
        setError(`Error: ${error.response.data.error || "Upload failed"}`);
      } else if (error.request) {
        console.error("📌 No response received. Check if Flask is running.");
        setError("Server not responding. Ensure Flask is running.");
      } else {
        console.error("📌 Axios Error:", error.message);
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Header />
      <Box 
        sx={{ 
          minHeight: "85vh", 
          width: "98vw", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          background: "url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: 2
        }}
      >
        <Paper 
          elevation={6} 
          sx={{ 
            p: 5, 
            width: "100%", 
            maxWidth: 550, 
            textAlign: "center", 
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2983/2983066.png" 
              alt="Upload Illustration" 
              width="120"
              style={{ opacity: 0.9 }}
            />
          </Box>

          <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
            Upload Your Resume
          </Typography>

          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Upload your resume in PDF or DOCX format to get AI-powered analysis and feedback.
          </Typography>

          <Box sx={{ my: 3 }}>
            <input 
              accept=".pdf,.doc,.docx" 
              type="file" 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
              id="upload-button"
            />
            <label htmlFor="upload-button">
              <Button 
                variant="contained" 
                color="secondary" 
                component="span"
                startIcon={<CloudUpload />}
                sx={{ py: 1.5, px: 3, fontSize: "1rem", "&:hover": { backgroundColor: "#ff7043" } }}
              >
                Choose File
              </Button>
            </label>
          </Box>

          {selectedFile && (
            <Typography 
              variant="body1" 
              sx={{ mt: 2, color: "text.secondary", display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
            >
              <InsertDriveFile color="primary" /> <strong>{selectedFile.name}</strong>
            </Typography>
          )}

          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3, py: 1.5, px: 4, fontSize: "1rem", "&:hover": { backgroundColor: "#1e88e5" } }}
            disabled={!selectedFile || loading}
            onClick={handleUpload}
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </Button>
        </Paper>
      </Box>
      <Footer />

      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Resume uploaded successfully!</Alert>
      </Snackbar>
    </>
  );
};

export default UploadResume;
