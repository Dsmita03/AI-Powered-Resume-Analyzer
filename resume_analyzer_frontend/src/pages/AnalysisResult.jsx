import { Container, Typography, Box } from "@mui/material";
import Header from "../components/Header";

const AnalysisResult = () => {
  return (
    <>
      <Header />
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Analysis Result
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography variant="h6" color="textSecondary">
            📊 Your resume analysis results will be displayed here.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AnalysisResult;
