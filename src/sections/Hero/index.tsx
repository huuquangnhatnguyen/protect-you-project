import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import bgImg from "../../assets/images/hero-bg.png";
import { Container, Grid2, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

HeroSection.propTypes = {};

function HeroSection(props) {
  return (
    <div
      className="hero__container"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero__content">
        <Container sx={{ margin: 0 }}>
          <Grid2 container spacing={2} sx={{ maxWidth: "50%" }}>
            <Item>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
                Welcome to <br /> Your Health Dashboard
              </h1>
              <p style={{ fontSize: "1.2rem" }}>
                Your health is your most valuable asset. Keep track of your
                health data and get personalized insights to improve your
                well-being.
              </p>
            </Item>
          </Grid2>
        </Container>
      </div>
    </div>
  );
}

export default HeroSection;
