import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import bgImg from "../../assets/images/hero-bg.png";
import { height } from "@mui/system";
HeroSection.propTypes = {};

function HeroSection(props) {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div
        style={{
          minHeight: "500px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          display: "flex",
          textAlign: "left",
          paddingLeft: "2rem",
        }}
      >
        normal things
      </div>
    </div>
  );
}

export default HeroSection;
