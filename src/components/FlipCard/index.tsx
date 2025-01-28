import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import allSvg from "../../assets/svg/svg";
import "./styles.scss";
import { Grid, Typography } from "@mui/material";
import dbImg from "../../assets/images/dashboard.png";

type FlipCardProps = {
  name: string;
  imgSrc?: string;
  func?: string;
};

function FlipCard({ name, imgSrc, func }: FlipCardProps) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      id="flip-card"
    >
      <div className="flip-card-inner">
        <div
          style={{
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
            minHeight: "425px",
            padding: "1rem 0.1rem",
          }}
          className="flip-card-front"
        >
          <img
            src={imgSrc}
            alt={name}
            style={{ width: "95%", height: "auto" }}
          />
          <div style={{ padding: "1rem" }}>
            <Typography variant="h4">{name}</Typography>
            <Typography>{func}</Typography>
          </div>
        </div>
        <div
          className="flip-card-back"
          style={{
            minHeight: "450px",
            padding: "0.5rem 0.2rem",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            className="flip-card-back-content"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              margin: "5rem 1rem",
            }}
          >
            <div style={{ padding: "1rem" }}>
              <Typography variant="h4">{name}</Typography>
              <Typography>{func}</Typography>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default FlipCard;
