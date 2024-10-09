import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import {
  FaHome,
  FaWallet,
  FaPlane,
  FaCheckSquare,
  FaCog,
  FaPhone,
} from "react-icons/fa";


const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1c1c1e",
          color: "#fff",
        },
      }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ width: 56, height: 56 }} src="/profile.jpg" />
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          Naman Kulshresth
        </Typography>
      </div>
      <List>
        {["Home", "Expenses", "Trips", "Settings", "Support"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              style={{ height: "80px", padding: "20px", border:"grey" }}
            >
              <ListItemIcon sx={{ color: "#8be9fd" }}>
                {index === 0 && <FaHome />}
                {index === 1 && <FaWallet />}
                {index === 2 && <FaPlane />}
                {index === 3 && <FaCheckSquare />}
                {index === 4 && <FaCog />}
                {index === 5 && <FaPhone />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ fontSize: "40px", fontWeight: 700 }}
              />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
