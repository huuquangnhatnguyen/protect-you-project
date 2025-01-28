import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Typography } from "@mui/material";
import dbImg from "../../assets/images/dashboard.png";
import nutriImg from "../../assets/images/nutrition.png";
import alertsImg from "../../assets/images/alerts.png";
import FlipCard from "../../components/FlipCard";

FeaturesSection.propTypes = {};

function FeaturesSection(props) {
  return (
    <Container maxWidth="xl" sx={{ margin: "5.5rem auto" }}>
      <Typography variant="h2">Features</Typography>
      <Typography variant="h6" mt={"0.7rem"}>
        This project is aim to design a smart device for displaying a seasonal
        health and nutrition that will be placed on a fridge door. The goal is
        to provide household members with quick information about common
        illnesses in each season, key advisory nutrients, and seasonal produce
        to incorporate into meals.
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ marginTop: "3rem", minHeight: "500px" }}
      >
        <FlipCard
          name="Healthcare Dashboard"
          func="Display healthcare information like common illnesses in each season"
          imgSrc={dbImg}
        />
        <FlipCard
          name="Nutrition & Ingredients"
          func="Show seasonal ingredients to be used in meals to boost necessary nutrients"
          imgSrc={nutriImg}
        />
        <FlipCard
          name="Healthcare Alerts"
          func="Showing updated news about local healthcare likes outbreaks or in-app notifications"
          imgSrc={alertsImg}
        />
      </Grid>
    </Container>
  );
}

export default FeaturesSection;
