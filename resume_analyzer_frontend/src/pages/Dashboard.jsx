import { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7, UploadFile, Work, BarChart as BarChartIcon } from "@mui/icons-material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const dashboardData = [
  { name: "Jan", resumes: 10, matches: 5 },
  { name: "Feb", resumes: 15, matches: 8 },
  { name: "Mar", resumes: 20, matches: 12 },
  { name: "Apr", resumes: 25, matches: 18 },
];

const Dashboard = () => {
  // Load dark mode preference from local storage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: darkMode ? "#121212" : "#f4f6f9",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4 }}>
        
        {/* Title & Theme Toggle */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Dashboard
          </Typography>

          {/* Dark Mode Toggle Button */}
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              backgroundColor: darkMode ? "#1976d2" : "#1976d2",
              color: "#fff",
              "&:hover": { backgroundColor: darkMode ? "#1565c0" : "#0d47a1" },
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        {/* Overview Stats */}
        <Grid container spacing={3} mb={3}>
          {[
            { icon: <UploadFile fontSize="large" color="primary" />, value: "250", label: "Total Resumes Uploaded" },
            { icon: <Work fontSize="large" color="secondary" />, value: "120", label: "Successful Job Matches" },
            { icon: <BarChartIcon fontSize="large" color="success" />, value: "85%", label: "Resume Optimization Rate" }
          ].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                  color: darkMode ? "#fff" : "#333",
                  boxShadow: darkMode ? "none" : "0 2px 10px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {stat.icon}
                <Box>
                  <Typography variant="h6" fontWeight="bold">{stat.value}</Typography>
                  <Typography variant="body2" color="textSecondary">{stat.label}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={3}>
          {/* Bar Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: "350px",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#333",
                boxShadow: darkMode ? "none" : "0 2px 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography variant="h6" gutterBottom>Resumes Uploaded Over Time</Typography>
              <Box sx={{ backgroundColor: darkMode ? "#252525" : "#eef2f7", borderRadius: 2, padding: 2 }}>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={dashboardData}>
                    <XAxis dataKey="name" stroke={darkMode ? "#bbb" : "#333"} />
                    <YAxis stroke={darkMode ? "#bbb" : "#333"} />
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? "#444" : "#fff", color: "#333" }} />
                    <Bar dataKey="resumes" fill={darkMode ? "#64b5f6" : "#1976d2"} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Line Chart */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: "350px",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#333",
                boxShadow: darkMode ? "none" : "0 2px 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography variant="h6" gutterBottom>Job Matches Trend</Typography>
              <Box sx={{ backgroundColor: darkMode ? "#252525" : "#eef2f7", borderRadius: 2, padding: 2 }}>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={dashboardData}>
                    <XAxis dataKey="name" stroke={darkMode ? "#bbb" : "#333"} />
                    <YAxis stroke={darkMode ? "#bbb" : "#333"} />
                    <Tooltip contentStyle={{ backgroundColor: darkMode ? "#444" : "#fff", color: "#333" }} />
                    <Line type="monotone" dataKey="matches" stroke={darkMode ? "#ffb74d" : "#ff5722"} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Dashboard;
