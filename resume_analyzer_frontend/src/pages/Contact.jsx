import { TextField, Button, Box, Typography, Paper, InputAdornment } from "@mui/material";
import { AccountCircle, Email, Chat } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box display="flex" height="100vh" width="100vw">
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

          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ alignSelf: "flex-start" }}>
                    <Chat />
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="contained" color="primary" size="large" fullWidth>
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
