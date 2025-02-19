 import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { 
      title: 'AI-Powered Analysis', 
      description: 'Get deep insights into your resume with AI-driven recommendations.', 
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80' // AI & Tech theme
    },
    { 
      title: 'Instant Feedback', 
      description: 'Receive real-time suggestions to improve your resume instantly.', 
      image:'https://images.unsplash.com/photo-1601233740146-6bab3dc8b4a3?w=800&q=80' // Collaboration & feedback
  },
    {
      title: 'Job Match Insights', 
      description: 'Check how well your resume aligns with job requirements.', 
      image: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?w=800&q=80' // Job matching theme  
    }
  ];
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw", overflow: "hidden" }}>
      
      {/* Sticky Header */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
        <Header />
      </Box>

      {/* Hero Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            AI Resume Analyzer
          </Typography>
          <Typography variant="h6"  fontWeight="bold" sx={{ mt: 2, maxWidth: 700, mx: "auto", opacity: 0.9 }}>
            Transform your resume with intelligent insights. Get personalized feedback and recommendations to stand out in your job search.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" size="large" onClick={() => navigate("/upload")}>
              Upload Resume
            </Button>
            {/* <Button variant="contained" color="primary" size="large" onClick={() => navigate("/about")}>
              Learn More
            </Button> */}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 10, width: "100%" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 4, textAlign: "center", borderRadius: 3, 
                  transition: "0.3s", overflow: "hidden",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 8 }
                }}
              >
                <Box 
                  sx={{ 
                    height: 180, 
                    backgroundImage: `url(${feature.image})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    borderRadius: 2,
                    mb: 2
                  }} 
                />
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ backgroundColor: "#E3F2FD", py: 10, width: "100%" }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              { label: "Accuracy Rate", value: "98%", icon: "📊" },
              { label: "Availability", value: "24/7", icon: "⏳" },
              { label: "Resumes Analyzed", value: "10k+", icon: "📑" }
            ].map((stat, index) => (
              <Grid item xs={12} sm={4} key={index} textAlign="center">
                <Typography variant="h2" fontWeight="bold" color="primary">
                  {stat.icon} {stat.value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Sticky Footer */}
      <Box sx={{ position: "sticky", bottom: 0, zIndex: 1000, width: "100%" }}>
        <Footer />
      </Box>

    </Box>
  );
};

export default Home;
