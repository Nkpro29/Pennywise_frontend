import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import { FaHome, FaWallet, FaPlane, FaCog, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

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
        <Typography variant="h6" sx={{ marginTop: "10px", fontWeight:600 }}>
          Naman Kulshresth
        </Typography>
      </div>
      <List>
        {[
          { text: "Home", icon: <FaHome />, path: "/dashboard" },
          { text: "Expenses", icon: <FaWallet />, path: "/expenses" },
          { text: "Trips", icon: <FaPlane />, path: "/trips" },
          { text: "Settings", icon: <FaCog />, path: "/settings" },
          { text: "Support", icon: <FaPhone />, path: "/support" },
        ].map(({ text, icon, path }) => (
          <ListItem
            button
            key={text}
            sx={{
              height: "100px",
              padding: "20px",
              "&.active .MuiListItemText-root": { textDecoration: "underline" },
            }}
            component={Link}
            to={path} // Link to the respective page
          >
            <ListItemIcon sx={{ color: "#8be9fd", fontSize: "20px" }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ fontSize: "20px", fontWeight: 700 }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
