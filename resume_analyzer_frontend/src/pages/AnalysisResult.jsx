import { useEffect, useState } from "react";
import { 
  Container, Typography, CircularProgress, Card, CardContent, Box 
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AnalysisResult = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();
  const fileName = location.state?.fileName || "Unknown";

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        // Sending the fileName in the body for POST request
        const response = await axios.post("http://127.0.0.1:5000/analysis", { fileName });
        console.log("Response from API:", response.data);  // Log the response
        setAnalysisData(response.data);
      } catch (err) {
        setError("Failed to fetch analysis results.");
        console.error("Error fetching analysis:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [fileName]); // Dependency on fileName

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "85vh",
          width: "97vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right,rgb(166, 185, 212),rgb(51, 112, 217))",
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            color="white" 
            fontWeight="bold" 
            textAlign="center" 
            gutterBottom
          >
            📊 Resume Analysis Result
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress color="inherit" />
            </Box>
          ) : error ? (
            <Typography variant="h6" color="error" textAlign="center">
              {error}
            </Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Card 
                sx={{ 
                  width: "90%", 
                  maxWidth: 800, 
                  p: 4, 
                  boxShadow: 5, 
                  borderRadius: 3, 
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    color="textSecondary" 
                    fontWeight="bold" 
                    sx={{ mb: 2 }}
                  >
                    📝 Resume: {fileName}
                  </Typography>

                  {/* Displaying user details */}
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    fontWeight="bold" 
                    sx={{ mt: 2 }}
                  >
                    👤 User Details:
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                    <strong>Name:</strong> {analysisData?.analysis?.name || "Not available"}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                    <strong>Email:</strong> {analysisData?.analysis?.email || "Not available"}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                    <strong>Phone:</strong> {analysisData?.analysis?.phone || "Not available"}
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                    <strong>Skills:</strong> {analysisData?.analysis?.skills.join(', ') || "No skills detected"}
                  </Typography>

                  {/* Displaying key strengths */}
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    fontWeight="bold" 
                    sx={{ mt: 2 }}
                  >
                    ✅ Key Strengths:
                  </Typography>
                  <Typography sx={{ color: "green", fontSize: "1rem", mt: 1 }}>
                    {analysisData?.ai_analysis?.strengths || "AI analysis failed."}
                  </Typography>

                  {/* Displaying areas of improvement */}
                  <Typography 
                    variant="h6" 
                    color="error" 
                    fontWeight="bold" 
                    sx={{ mt: 3 }}
                  >
                    ⚠️ Areas of Improvement:
                  </Typography>
                  <Typography sx={{ color: "red", fontSize: "1rem", mt: 1 }}>
                    {analysisData?.ai_analysis?.weaknesses || "Error: No weaknesses detected."}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AnalysisResult;
