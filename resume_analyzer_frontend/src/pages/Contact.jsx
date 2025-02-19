import { useState } from "react";
import { TextField, Button, Box, Typography, Paper, InputAdornment } from "@mui/material";
import { AccountCircle, Email, Chat } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [result, setResult] = useState("");  
  const accessKey = import.meta.env.VITE_WEB3FORMS_API_KEY; // Access key from environment variable

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); // Show sending status while submitting the form

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setResult("Form Submitted Successfully!"); // Success message
        event.target.reset(); // Reset the form after successful submission
      } else {
        setResult(`Error: ${res.message}`); // Error message
      }
    } catch (error) {
      setResult("Something went wrong, please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box display="flex" height="calc(100vh - 120px)" width="100vw">
        {/* Left Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right Side - Contact Form */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#f7f9fc"
          p={3}
        >
          <Paper elevation={3} sx={{ p: 4, maxWidth: 450, width: "100%", borderRadius: 2 }}>
            <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
              Get in Touch
            </Typography>

            <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={onSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                name="name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                name="message"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" style={{ alignSelf: "flex-start" }}>
                      <Chat />
                    </InputAdornment>
                  ),
                }}
                required
              />

              <Button variant="contained" color="primary" size="large" fullWidth type="submit">
                Send Message
              </Button>

              {/* Display the result of the form submission */}
              {result && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2, textAlign: "center" }}>
                  {result}
                </Typography>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
