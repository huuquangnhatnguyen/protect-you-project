import { useEffect, useState } from "react";

import "./styles.scss";
import DeviceInterface from "../../components/DeviceInterface";
import { Container, Grid, Typography } from "@mui/material";
import AccordionUsage from "../../components/AccordionUsage";

function InterfaceMockup() {
  return (
    <Container maxWidth="xl" sx={{ margin: "5rem auto 0rem" }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h2">Interactive Interface</Typography>
        <Typography variant="h6" mb="1.5rem" mt="0.5rem">
          Click on the buttons to interact with the device
        </Typography>
        <Grid container spacing={8} mt={2}>
          <Grid item xs={12} md={8} p={16}>
            <DeviceInterface />
          </Grid>
          <Grid item xs={12} md={4} p={0}>
            <AccordionUsage />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InterfaceMockup;
