import React from "react";
import { Paper, styled } from "@mui/material";

type NotificationProps = {
  title: string;
  time: string;
  type: string;
  content: string;
};

const Item = styled(Paper)(({ theme }) => ({
  margin: "10px auto",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
  width: "80%",
  minWidth: "25%",
  height: "fit-content",
}));

function Notification({ content, title, type, time }: NotificationProps) {
  const bgColor =
    type === "error"
      ? "#FFF0F0"
      : type === "warning"
      ? "#FFF0E6"
      : type === "testing"
      ? "#F0F0FF"
      : "#E6F2FF";
  const titleColor =
    type === "error"
      ? "#C80000"
      : type === "warning"
      ? "#C68400"
      : type === "testing"
      ? "#6A5ACD"
      : "#0077B6";
  return (
    <Item sx={{ background: bgColor }}>
      <h2 style={{ color: titleColor, fontSize: "1.8rem" }}>{title}</h2>
      <p style={{ fontSize: "1rem" }}>{content}</p>
    </Item>
  );
}

export default Notification;
