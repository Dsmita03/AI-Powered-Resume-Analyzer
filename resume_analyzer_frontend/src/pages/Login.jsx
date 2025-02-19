import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box, Paper, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?query=office&client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBgImage(data.urls?.regular || "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1920&h=1080&fit=crop");
      })
      .catch((err) => {
        console.error("Error fetching Unsplash image:", err);
        setBgImage("https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1920&h=1080&fit=crop"); // Fallback Image
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("token", "dummy-auth-token"); // Mock token
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <Box sx={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)", // Darken background
          zIndex: -1,
        }}
      >
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <CircularProgress color="primary" />
          </Box>
        )}
      </Box>

      {/* Login Form */}
      <Paper
        elevation={6}
        sx={{
          p: 5,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Glass effect
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)", // Soft shadow
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2} color="white">Login</Typography>
        {error && <Typography color="error">{error}</Typography>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{ sx: { color: "white" } }} // White text input
            sx={{ input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{ sx: { color: "white" } }}
            sx={{ input: { color: "white" }, label: { color: "white" }, fieldset: { borderColor: "white" } }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.2 }}>Login</Button>
          <Typography variant="body2" mt={1} color="white">
            Don't have an account?{" "}
            <Button onClick={() => navigate("/signup")} color="primary" sx={{ textTransform: "none" }}>
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
