import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., token in localStorage)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Converts token existence to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home
  };

  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={logo} alt="ResuMate.ai Logo" style={{ height: 60, marginRight: 10 }} />
          <Typography variant="h5" fontWeight="bold" color="primary">
            ResuMate.ai
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About Us</Button>
          <Button color="inherit" onClick={() => navigate("/savedResume")}>Saved Resumes</Button>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>Dashboard</Button> 
          <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {isAuthenticated ? (
            <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>Login</Button>
              <Button variant="contained" color="primary" onClick={() => navigate("/signUp")}>Sign Up</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
