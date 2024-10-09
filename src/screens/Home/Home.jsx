import { Card, CardContent, Typography, Box, Button } from "@mui/material";
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

const Dashboard = () => {
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
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#181818",
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
                <Grid size={4}>
                  <Card
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      height: "150px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center"
                    }}
                  >
                    <CardContent>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        + New Expense
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={4}>
                  <Card
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      height: "150px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center"
                    }}
                  >
                    <CardContent>
                      <Button variant="contained" sx={{ mt: 2, color:"whitesmoke", backgroundColor:"#333" }}>
                        + Add Receipt
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid size={4}>
                  <Card
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      height: "150px",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center"
                    }}
                  >
                    <CardContent>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        + Create Report
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
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
  );
};

export default Dashboard;
