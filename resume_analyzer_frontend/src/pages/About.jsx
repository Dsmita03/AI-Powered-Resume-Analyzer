import { Box, Container, Typography, Grid, Paper, Avatar, Button } from "@mui/material";
import { Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStartedClick = () => {
    navigate('/'); // Navigate to the home page when the button is clicked
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw", overflow: "hidden", backgroundColor: "#E3F2FD" }}>
      
      {/* Sticky Header */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
        <Header />
      </Box>

      {/* Hero Section with Static Background Image */}
      <Box 
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: 12,
          textAlign: "center"
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            About ResuMate.ai
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 700, mx: "auto", opacity: 0.9 }}>
            Empowering job seekers with AI-driven resume analysis, personalized insights, and job match suggestions to boost your career opportunities.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleGetStartedClick}>
            Get Started
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" gutterBottom>
          What is ResuMate.ai?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2, maxWidth: 800, mx: "auto", opacity: 0.8 }}>
          The ** ResuMate.ai ** is an innovative platform designed to help job seekers craft the perfect resume using cutting-edge artificial intelligence. Our goal is to simplify the resume-building process while offering insightful recommendations to make your resume stand out to potential employers.
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2, maxWidth: 800, mx: "auto", opacity: 0.8 }}>
          Whether you’re applying for a job, seeking a career change, or just want to refine your resume, our AI-powered analysis helps optimize your resume for job descriptions and ensures it aligns with industry standards. 
        </Typography>
      </Container>

      {/* Core Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" gutterBottom>
          Key Features of ResuMate.ai
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { 
              title: "AI-Powered Insights", 
              description: "Analyze your resume with advanced AI models that provide deep insights on how to improve content, structure, and keywords.", 
              icon: <Sparkles className="w-12 h-12 text-blue-700" /> 
            },
            { 
              title: "Instant Feedback", 
              description: "Receive real-time suggestions for optimizing your resume’s language, formatting, and relevance to the job market.", 
              icon: <CheckCircle className="w-12 h-12 text-green-500" /> 
            },
            { 
              title: "Job Match Analysis", 
              description: "Find out how well your resume matches specific job descriptions, helping you target the right roles.", 
              icon: <HelpCircle className="w-12 h-12 text-blue-400" /> 
            },
            { 
              title: "Personalized Recommendations", 
              description: "Get personalized advice based on your skills, experience, and career goals to help you refine your resume.", 
              icon: <Sparkles className="w-12 h-12 text-yellow-500" /> 
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 4, textAlign: "center", borderRadius: 3, 
                  backgroundColor: "#BBDEFB",
                  transition: "0.3s", 
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensures uniform card height
                  height: "100%", // Ensures all cards have equal height
                  "&:hover": { transform: "scale(1.05)", boxShadow: 8 }
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {feature.icon}
                </Box>
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

      {/* Meet Our Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" gutterBottom>
          Meet Our Expert Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: "John Doe", role: "Founder & AI Engineer", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&q=80" },
            { name: "Jane Smith", role: "Product Designer", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80" },
            { name: "Alex Johnson", role: "Software Developer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={4} 
                sx={{ 
                  p: 3, textAlign: "center", borderRadius: 3, 
                  backgroundColor: "#BBDEFB",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensures uniform card height
                  height: "100%", // Ensures all cards have equal height
                  "&:hover": { transform: "scale(1.05)", boxShadow: 8 }
                }}
              >
                <Avatar src={member.img} alt={member.name} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
                <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                <Typography variant="body2" color="textSecondary">{member.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
