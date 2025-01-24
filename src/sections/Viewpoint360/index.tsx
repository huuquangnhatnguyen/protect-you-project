import React from "react";
import PropTypes from "prop-types";
import DeviceInterface from "../../components/DeviceInterface";
import "./styles.scss";
import { Container, Grid, Typography } from "@mui/material";

Viewpoint360.propTypes = {};

function Viewpoint360(props) {
  return (
    <Container maxWidth="xl" sx={{ margin: "2rem auto" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h2">360 Degree View of the Device</Typography>
        <Typography variant="h6" mb="2rem">
          Click and drag to rotate the device
        </Typography>
        <div className="box">
          <div className="cover top"></div>
          <div className="cover bottom"></div>
          <div className="face back"></div>
          <div className="face front">
            <DeviceInterface />
          </div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
      </Grid>
    </Container>
  );
}

export default Viewpoint360;
