import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import NotificationsIcon from "@mui/icons-material/Notifications";
type headerPropTypes = {
  curPage: string;
  setCurPage: (newValue: string) => void;
};

export default function Header({ curPage, setCurPage }: headerPropTypes) {
  return (
    <Box sx={{ width: "100%", height: "60px", borderBottom: "1px solid #000" }}>
      <BottomNavigation
        showLabels
        value={curPage}
        onChange={(event, newValue) => {
          setCurPage(newValue);
        }}
        sx={{
          justifyContent: "space-around",
          borderTopRightRadius: "0.7rem",
          borderTopLeftRadius: "0.7rem",
        }}
      >
        <BottomNavigationAction
          sx={{ width: "100%" }}
          label="Dashboard"
          icon={<DashboardIcon />}
          value="Dashboard"
        />
        <BottomNavigationAction
          label="Nutrition"
          icon={<RestaurantMenuIcon />}
          value="Nutrition"
        />
        <BottomNavigationAction
          label="Alerts"
          icon={<NotificationsIcon />}
          value="Alerts"
        />
      </BottomNavigation>
    </Box>
  );
}
