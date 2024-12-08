import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
Nutrition.propTypes = {};

const Item = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
}));

function Nutrition(props: any) {
  return (
    <Box sx={{ flexGrow: 1, height: "480px" }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid sx={{ height: "200px" }}>
          <Item>flu</Item>
        </Grid>

        <Grid container sx={{ height: "280px" }}>
          <Grid size={6}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={6}>
            <Item>size=4</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Nutrition;
