import { Typography, Button, Box, Container } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import Grid from "@mui/material/Grid2";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background:
          "linear-gradient(180deg, rgba(36,37,42,1) 0%, rgba(29,29,31,1) 100%)",
        color: "white",
        paddingTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={6}>
          {/* Header Section */}
          <Grid size={12} textAlign="center">
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              PennyWise - An Expense Tracker for College Student
            </Typography>
            <Typography variant="h6">
              Spend smart, save early, succeed always.
            </Typography>
          </Grid>

          {/* Call-to-Action Buttons */}
          <Grid size={12} textAlign="center">
            <Button
              variant="contained"
              color="success"
              sx={{
                fontSize: "1rem",
                padding: "10px 30px",
                borderRadius: "30px",
                marginRight: "20px",
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#45a045" },
              }}
            >
              SignIn
            </Button>
            <Button
              variant="contained"
              startIcon={<FaGoogle />}
              sx={{
                fontSize: "1rem",
                padding: "10px 30px",
                borderRadius: "30px",
                backgroundColor: "#db4437",
                "&:hover": { backgroundColor: "#c33d2f" },
              }}
            >
              Sign-Up Using Google
            </Button>
          </Grid>

          {/* Expense Management Dashboard */}
        </Grid>
      </Container>
    </Box>
  );
}
