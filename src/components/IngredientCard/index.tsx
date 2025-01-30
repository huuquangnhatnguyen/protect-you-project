import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import allSvg from "../../assets/svg/svg";

type IngredientCardProps = {
  name: string;
  color?: string;
  ingredientOpen?: boolean;
  setIngredientOpen?: (newValue: boolean) => void;
};

const Item = styled(Paper)(({ theme, color }) => ({
  margin: "4px auto",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  boxShadow: `0 0 2px 0 #${color}`,
  border: `1px solid rgba(0,0,0,0.1)`,
  width: "fit-content",
  minWidth: "25%",
  height: "fit-content",
  "&:hover": {
    boxShadow: `0 0 5px 0 #${color}`,
    pointer: "pointer",
  },
}));

function IngredientCard({
  name,
  color,
  ingredientOpen,
  setIngredientOpen,
}: IngredientCardProps) {
  const image = allSvg[name.toLocaleLowerCase()];
  return (
    <Item
      color={color}
      onClick={() => setIngredientOpen && setIngredientOpen(true)}
    >
      <img id="ingredient" src={image && image} alt={name} />
    </Item>
  );
}

export default IngredientCard;
