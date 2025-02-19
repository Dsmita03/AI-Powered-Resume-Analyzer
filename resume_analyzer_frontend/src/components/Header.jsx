import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '/logo.png'; 

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={logo} alt="ResumeAnalyzer.ai Logo" style={{ height: 60, marginRight: 10 }} /> {/* Increased height */}
          <Typography variant="h5" fontWeight="bold" color="primary">
          ResuMate.ai
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About Us</Button>
          <Button color="inherit" onClick={() => navigate("/pricing")}>Pricing</Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>Contact</Button>
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>Login</Button>
          <Button variant="contained" color="primary" onClick={() => navigate("/signup")}>Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
