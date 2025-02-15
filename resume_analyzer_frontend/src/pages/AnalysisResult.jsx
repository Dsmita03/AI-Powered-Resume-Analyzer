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
        const response = await axios.get("http://127.0.0.1:5000/analysis");
        setAnalysisData(response.data);
      } catch (err) {
        setError("Failed to fetch analysis results.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchAnalysis();
  }, []);

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

                  <Typography 
                    variant="h6" 
                    color="primary" 
                    fontWeight="bold" 
                    sx={{ mt: 2 }}
                  >
                    ✅ Key Strengths:
                  </Typography>
                  <Typography sx={{ color: "green", fontSize: "1rem", mt: 1 }}>
                    {analysisData.strengths || "No strengths detected"}
                  </Typography>

                  <Typography 
                    variant="h6" 
                    color="error" 
                    fontWeight="bold" 
                    sx={{ mt: 3 }}
                  >
                    ⚠️ Areas of Improvement:
                  </Typography>
                  <Typography sx={{ color: "red", fontSize: "1rem", mt: 1 }}>
                    {analysisData.weaknesses || "No weaknesses detected"}
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
