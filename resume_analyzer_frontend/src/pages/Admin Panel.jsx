import { useState } from "react";
import { 
  Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, 
  ListItemIcon, ListItemText, Paper, Grid, Button, CssBaseline 
} from "@mui/material";
import { 
  Brightness4, Brightness7, Dashboard, People, Work, UploadFile, Menu 
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;

const AdminPanel = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#1976D2" }, // Blue primary color
      secondary: { main: "#1565C0" }, // Darker blue for accents
      background: { 
        default: darkMode ? "#121212" : "#E3F2FD", // Black for dark mode, Light Blue for light mode
        paper: darkMode ? "#1E1E1E" : "#FFFFFF" // Dark gray paper in dark mode
      },
      text: { 
        primary: darkMode ? "#FFFFFF" : "#0D47A1" // White text in dark mode, Deep Blue in light mode
      },
    },
  });
  
  

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Users", icon: <People /> },
    { text: "Resumes", icon: <UploadFile /> },
    { text: "Job Matches", icon: <Work /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        
        {/* Sidebar Navigation */}
        <Drawer 
          variant="permanent" 
          sx={{ 
            width: drawerWidth, 
            flexShrink: 0, 
            overflow: "auto",
            [`& .MuiDrawer-paper`]: { 
              width: drawerWidth, 
              boxSizing: "border-box", 
              backgroundColor: theme.palette.background.paper
            } 
          }}
        >
          <Toolbar />
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                onClick={() => setSelectedTab(item.text)} 
                sx={{
                  padding: "12px 20px",
                  "&:hover": { backgroundColor: theme.palette.action.hover }
                }}
              >
                <ListItemIcon sx={{ color: theme.palette.text.primary }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: theme.palette.background.default, transition: "all 0.3s ease-in-out" }}>
          
          {/* AppBar */}
          <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: drawerWidth }}>
            <Toolbar>
              <IconButton color="inherit" edge="start" sx={{ display: { sm: "none" } }} onClick={() => setOpenDrawer(true)}>
                <Menu />
              </IconButton>
              <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}>
                Admin Panel - {selectedTab}
              </Typography>
              <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />

          {/* Dashboard Content */}
          {selectedTab === "Dashboard" && (
  <Grid container spacing={3}>
    {[
      { icon: <UploadFile fontSize="large" color="primary" />, count: "250", label: "Total Resumes" },
      { icon: <People fontSize="large" color="secondary" />, count: "120", label: "Total Users" },
      { icon: <Work fontSize="large" color="success" />, count: "85", label: "Job Matches" },
    ].map((item, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Paper 
          sx={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 150, // Ensures all cards have the same height
            width: "100%", // Responsive width
            p: 3, 
            textAlign: "center", 
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          }}
        >
          {item.icon}
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>{item.count}</Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>{item.label}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
)}


          {/* Users Tab */}
          {selectedTab === "Users" && (
            <Paper sx={{ p: 3, boxShadow: theme.shadows[3] }}>
              <Typography variant="h6" fontWeight="bold">User Management</Typography>
              <Typography variant="body2">List of registered users.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Users</Button>
            </Paper>
          )}

          {/* Resumes Tab */}
          {selectedTab === "Resumes" && (
            <Paper sx={{ p: 3, boxShadow: theme.shadows[3] }}>
              <Typography variant="h6" fontWeight="bold">Resume Management</Typography>
              <Typography variant="body2">List of uploaded resumes.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Resumes</Button>
            </Paper>
          )}

          {/* Job Matches Tab */}
          {selectedTab === "Job Matches" && (
            <Paper sx={{ p: 3, boxShadow: theme.shadows[3] }}>
              <Typography variant="h6" fontWeight="bold">Job Match Management</Typography>
              <Typography variant="body2">List of job matches.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Matches</Button>
            </Paper>
          )}
        </Box>

        {/* Collapsible Drawer for Mobile */}
        <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{ display: { xs: "block", sm: "none" } }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={() => { setSelectedTab(item.text); setOpenDrawer(false); }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default AdminPanel;
