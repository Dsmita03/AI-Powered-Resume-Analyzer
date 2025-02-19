import { useState, useEffect } from "react";
import {
  Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button, TextField, Grid, IconButton, Typography
} from "@mui/material";
import { Visibility, Download, Delete, UploadFile, Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock saved resumes
const mockResumes = [
  { id: 1, fileName: "John_Doe_Resume.pdf", uploadDate: "2025-02-15", jobMatchScore: "85%" },
  { id: 2, fileName: "Jane_Smith_CV.docx", uploadDate: "2025-02-10", jobMatchScore: "92%" },
  { id: 3, fileName: "Mark_Johnson_Resume.pdf", uploadDate: "2025-02-08", jobMatchScore: "78%" },
];

const SavedResumes = () => {
  const [search, setSearch] = useState("");
  const [resumes, setResumes] = useState(mockResumes);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  // Save dark mode preference in local storage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Theme Configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: darkMode ? "#64b5f6" : "#1976d2" }, // Blue Theme
      secondary: { main: "#f50057" },
      background: { default: darkMode ? "#121212" : "#f4f6f8", paper: darkMode ? "#1e1e1e" : "#ffffff" },
      text: { primary: darkMode ? "#ffffff" : "#0d47a1" }, // Dark Blue Text for Light Mode
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

  // Filter resumes based on search input
  const filteredResumes = resumes.filter((resume) =>
    resume.fileName.toLowerCase().includes(search.toLowerCase())
  );

  // Delete resume function
  const handleDelete = (id) => {
    setResumes(resumes.filter((resume) => resume.id !== id));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100vw" }}>
      
      {/* Header (Theme Not Affected) */}
      <Header />

      {/* Theme Provider for Page Content (Excluding Header) */}
      <ThemeProvider theme={theme}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 4, backgroundColor: theme.palette.background.default }}>

          {/* Page Title & Dark Mode Toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="primary">
              📂 Your Saved Resumes
            </Typography>

            {/* Dark Mode Toggle Button */}
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="primary"
              sx={{
                backgroundColor: theme.palette.background.paper,
                padding: "8px",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: darkMode ? "#424242" : "#bbdefb" },
              }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          {/* Search Bar */}
          <TextField
            label="Search Resumes..."
            variant="outlined"
            fullWidth
            sx={{ maxWidth: "600px", mb: 3 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Resume List (Table) */}
          <TableContainer component={Paper} sx={{ width: "90vw", borderRadius: 2, overflow: "hidden", backgroundColor: theme.palette.background.paper }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>File Name</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Upload Date</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Job Match Score</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredResumes.length > 0 ? (
                  filteredResumes.map((resume) => (
                    <TableRow key={resume.id}>
                      <TableCell>{resume.fileName}</TableCell>
                      <TableCell>{resume.uploadDate}</TableCell>
                      <TableCell>{resume.jobMatchScore}</TableCell>
                      <TableCell>
                        <IconButton color="primary"><Visibility /></IconButton>
                        <IconButton color="success"><Download /></IconButton>
                        <IconButton color="error" onClick={() => handleDelete(resume.id)}><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      <Typography variant="body1" color="textSecondary">No resumes found.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Upload New Resume Button */}
          <Grid container justifyContent="center">
            <Button variant="contained" color="primary" sx={{ mt: 3 }} startIcon={<UploadFile />}>
              Upload New Resume
            </Button>
          </Grid>

        </Box>
      </ThemeProvider>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SavedResumes;
