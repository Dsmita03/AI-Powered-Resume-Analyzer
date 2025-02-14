import { useState } from "react";
import { Typography, Button, Box, Paper } from "@mui/material";
import { CloudUpload, InsertDriveFile } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
          background: "url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1600&q=80')", // Professional background
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
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
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

          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3, py: 1.5, px: 4, fontSize: "1rem", "&:hover": { backgroundColor: "#1e88e5" } }}
          >
            Analyze Resume
          </Button>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default UploadResume;
