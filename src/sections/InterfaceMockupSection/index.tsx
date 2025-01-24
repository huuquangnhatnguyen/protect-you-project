import { useEffect, useState } from "react";

import "./styles.scss";
import DeviceInterface from "../../components/DeviceInterface";
import { Container, Grid, Typography } from "@mui/material";

function InterfaceMockup() {
  return (
    <Container maxWidth="xl" sx={{ margin: "2rem auto" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h2">Interactive Interface</Typography>
        <Typography variant="h6" mb="2rem">
          Click on the buttons to interact with the device{" "}
        </Typography>
        <DeviceInterface />
      </Grid>
    </Container>
  );
}

export default InterfaceMockup;
