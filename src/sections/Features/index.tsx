import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Typography } from "@mui/material";
import dbImg from "../../assets/images/dashboard.png";
import nutriImg from "../../assets/images/nutrition.png";
import alertsImg from "../../assets/images/alerts.png";

FeaturesSection.propTypes = {};

function FeaturesSection(props) {
  return (
    <Container maxWidth="xl" sx={{ margin: "2rem auto" }}>
      <Typography variant="h2">Features</Typography>
      <Typography variant="h6">
        This project is aim to design a smart device for displaying a seasonal
        health and nutrition that will be placed on a fridge door. The goal is
        to provide household members with quick information about common
        illnesses in each season, key advisory nutrients, and seasonal produce
        to incorporate into meals.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <div
            style={{
              boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
              minHeight: "450px",
              padding: "0.5rem 0.2rem",
            }}
          >
            <img
              src={dbImg}
              alt="nutrition"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h4">Health Dashboard</Typography>
            <Typography m="0 1rem 2rem 1rem">
              Display healthcare information: top 3 common diseases, top 3 vital
              nutrients and top 3 natural sources for them
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <div
            style={{
              boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
              minHeight: "450px",
              padding: "0.5rem 0.2rem",
            }}
          >
            <img
              src={nutriImg}
              alt="nutrition"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h4">Personal Nutrition</Typography>
            <Typography m="0 1rem 2rem 1rem">
              Show all seasonal ingredients to be used in meals to boost
              necessary nutrients
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <div
            style={{
              boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
              minHeight: "450px",
              padding: "0.5rem 0.2rem",
            }}
          >
            <img
              src={alertsImg}
              alt="alerts"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h4">Healthcare alerts</Typography>
            <Typography m="0 1rem 2rem 1rem">
              Showing updated news about local healthcare likes outbreaks or
              cautions or in-app notifications
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturesSection;
