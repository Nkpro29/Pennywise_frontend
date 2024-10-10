import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import AppTheme from "../../theme/AppTheme";
import { CssBaseline } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Description';
import FlightIcon from '@mui/icons-material/Flight';
import { useNavigate } from "react-router-dom";


// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const quickAccessCardStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 3px 5px rgba(0,0,0,0.3)',
  padding: '1rem',
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
};

const iconButtonStyle = {
  backgroundColor: '#2a2a2a',
  borderRadius: '50%',
  padding: '10px',
  marginBottom: '10px',
};

const textStyle = {
  fontWeight: '500',
  color: '#fff',
  fontSize: '16px',
};

const Dashboard = (props) => {

  const navigate = useNavigate();

  function openNewExpenses() {
      navigate("/newexpense")
  }

  // Data for the Line chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Expenses (₹)",
        data: [150, 200, 100, 250, 180, 220, 190],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  // Options for the Line chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // bgcolor: "#181818",
            p: 3,
            minHeight: "100vh",
            color: "#fff",
          }}
        >
          <Grid container spacing={3}>
            {/* First row: Pending Tasks and Recent Expenses */}
            <Grid size={6}>
              <Card
                sx={{
                  backgroundColor: "#262626",
                  color: "#fff",
                  border: "1px solid grey",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "7px 0px 5px 10px" }}>
                    Pending Tasks
                  </Typography>
                </Card>
                <CardContent>
                  <Typography>Pending Approvals: 5</Typography>
                  <Typography>New Trips Registered: 1</Typography>
                  <Typography>Unreported Expenses: 4</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={5}>
              <Card
                sx={{
                  backgroundColor: "#262626",
                  color: "#fff",
                  border: "1px solid grey",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "7px 0px 5px 10px" }}>
                    Recent Expenses
                  </Typography>
                </Card>
                <CardContent>
                  <Typography>Party at Sliet Restaurent: ₹ 150.00</Typography>
                  <Typography>Travel: ₹ 75.50</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Second row: Quick Access buttons in equal-sized columns */}
            <Grid size={12}>
              <Card
                sx={{
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "1px solid grey",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "7px 0px 5px 10px" }}>
                    Quick Access
                  </Typography>
                </Card>
                <div style={{ display: "flex" }}>
                  <Box sx={{ padding: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ color: "#fff", marginBottom: 2 }}
                    >
                      Quick Access
                    </Typography>
                    <Grid container spacing={2}>
                      {/* First Item */}
                      <Grid item xs={12} sm={3}>
                        <Card sx={quickAccessCardStyle}>
                          <CardContent sx={cardContentStyle}>
                            <IconButton sx={iconButtonStyle} size="large" onClick={openNewExpenses}>
                              <CreditCardIcon
                                fontSize="large"
                                sx={{ color: "#e91e63" }}
                              />
                            </IconButton>
                            <Typography sx={textStyle} >
                              + New expense
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      {/* Second Item */}
                      <Grid item xs={12} sm={3}>
                        <Card sx={quickAccessCardStyle}>
                          <CardContent sx={cardContentStyle}>
                            <IconButton sx={iconButtonStyle} size="large">
                              <ReceiptIcon
                                fontSize="large"
                                sx={{ color: "#3f51b5" }}
                              />
                            </IconButton>
                            <Typography sx={textStyle}>
                              + Add receipt
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      {/* Third Item */}
                      <Grid item xs={12} sm={3}>
                        <Card sx={quickAccessCardStyle}>
                          <CardContent sx={cardContentStyle}>
                            <IconButton sx={iconButtonStyle} size="large">
                              <ReportIcon
                                fontSize="large"
                                sx={{ color: "#00796b" }}
                              />
                            </IconButton>
                            <Typography sx={textStyle}>
                              + Create report
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      {/* Fourth Item */}
                      <Grid item xs={12} sm={3}>
                        <Card sx={quickAccessCardStyle}>
                          <CardContent sx={cardContentStyle}>
                            <IconButton sx={iconButtonStyle} size="large">
                              <FlightIcon
                                fontSize="large"
                                sx={{ color: "#d32f2f" }}
                              />
                            </IconButton>
                            <Typography sx={textStyle}>
                              + Create trip
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </Card>
            </Grid>

            {/* Third row: Monthly Report (Full Width) */}
            <Grid size={12}>
              <Card
                sx={{
                  backgroundColor: "#262626",
                  color: "#fff",
                  border: "1px solid grey",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Typography variant="h6" sx={{ margin: "7px 0px 5px 10px" }}>
                    Monthly Report
                  </Typography>
                </Card>
                <CardContent>
                  <Line data={data} options={options} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default Dashboard;
