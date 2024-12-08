import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";

Header.propTypes = {
  curPage: PropTypes.string,
  setCurPage: PropTypes.func,
};

export default function Header(props: any) {
  const { curPage, setCurPage } = props;
  return (
    <Box sx={{ width: "100%", height: "60px" }}>
      <BottomNavigation
        showLabels
        value={curPage}
        onChange={(event, newValue) => {
          console.log(newValue);
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
          icon={<RestoreIcon />}
          value="Dashboard"
        />
        <BottomNavigationAction
          label="Nutrition"
          icon={<FavoriteIcon />}
          value="Nutrition"
        />
        <BottomNavigationAction
          label="Alerts"
          icon={<LocationOnIcon />}
          value="Alerts"
        />
      </BottomNavigation>
    </Box>
  );
}