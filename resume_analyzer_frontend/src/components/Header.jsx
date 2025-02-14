import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo / Title */}
        <Typography 
          variant="h5" 
          fontWeight="bold" 
          color="primary" 
          sx={{ cursor: "pointer" }} 
          onClick={() => navigate("/")}
        >
          ResumeAnalyzer.ai
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/features")}>Features</Button>
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
