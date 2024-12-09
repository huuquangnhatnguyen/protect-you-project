import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import allSvg from "../../assets/svg/svg";

type ItemCardProps = {
  name: string;
  //   description: string;
  //   image: string;
  width?: string;
  height?: string;
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
  width: "fit-content",
  minWidth: "25%",
  height: "fit-content",
}));

function ItemCard({ name }: ItemCardProps) {
  const image = allSvg[name.toLocaleLowerCase()];
  return (
    <Item>
      <img src={image && image} alt={name} />
    </Item>
  );
}

export default ItemCard;
