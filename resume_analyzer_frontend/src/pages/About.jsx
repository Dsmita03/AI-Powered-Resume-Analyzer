import { Box, Container, Typography, Grid, Paper, Avatar} from "@mui/material";
import { Sparkles } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
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
            About AI Resume Analyzer
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 700, mx: "auto", opacity: 0.9 }}>
            Our AI-driven platform helps job seekers craft perfect resumes with smart insights, personalized feedback, and job match analysis.
          </Typography>
        </Container>
      </Box>

      {/* Core Features */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="primary" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { title: "AI-Powered Insights", description: "Analyze your resume with cutting-edge AI models for deep insights.", icon: <Sparkles className="w-12 h-12 text-blue-700" /> },
            { title: "Instant Feedback", description: "Receive real-time suggestions to improve your resume instantly.", icon: <Sparkles className="w-12 h-12 text-blue-500" /> },
            { title: "Job Matching", description: "Check how well your resume aligns with job descriptions.", icon: <Sparkles className="w-12 h-12 text-blue-400" /> },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 4, textAlign: "center", borderRadius: 3, 
                  backgroundColor: "#BBDEFB",
                  transition: "0.3s", 
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
          Meet Our Team
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
