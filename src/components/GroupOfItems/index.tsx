import React from "react";
import Grid from "@mui/material/Grid2";
import ItemCard from "../ItemCard";
import { Box, Typography } from "@mui/material";
import IngredientCard from "../IngredientCard";
import "./styles.scss";

type GroupOfItemsPropTypes = {
  title: string;
  nutrients: Array<string>;
  items: Array<string>;
  color: string;
  chosenGroup?: string;
  ingredientOpen?: boolean;
  setIngredientOpen?: (newValue: boolean) => void;
};

function GroupOfItems({
  title,
  items,
  color,
  chosenGroup,
  ingredientOpen,
  setIngredientOpen,
  nutrients,
}: GroupOfItemsPropTypes) {
  console.log(nutrients);
  if (chosenGroup && chosenGroup === title) {
    return (
      <Box
        sx={{
          margin: "10px auto",
          padding: "4px 1rem",
          textAlign: "center",
          color: "black",
          borderRadius: "15px",
          minWidth: "25%",
          height: "fit-content",
          justifyContent: "flex-start",
          border: "1px solid rgba(0,0,0,0.3)",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
        }}
        className={"chosen-group"}
      >
        <h2
          style={{
            margin: "0",
            color: `${color}`,
          }}
        >
          {title}
        </h2>
        <Grid container spacing={2} direction={"row"}>
          {items.map((item) => (
            <IngredientCard
              key={item}
              name={item}
              ingredientOpen={ingredientOpen}
              setIngredientOpen={setIngredientOpen}
            />
          ))}
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          margin: "10px auto",
          padding: "4px 1rem",
          textAlign: "center",
          color: "black",
          borderRadius: "15px",
          minWidth: "25%",
          height: "fit-content",
          justifyContent: "flex-start",
          border: "0.1rem solid rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            margin: "0",
            color: `#${color}`,
          }}
        >
          {title}
        </h2>
        <Grid
          container
          spacing={4}
          direction={"row"}
          sx={{ justifyContent: "center", m: 0 }}
        >
          {nutrients &&
            nutrients.map((nutrient: string) => (
              <Typography key={nutrient} variant="body2" color={`#${color}`}>
                {nutrient}
              </Typography>
            ))}
        </Grid>
        <Grid container spacing={2} direction={"row"}>
          {items.map((item) => (
            <IngredientCard
              key={item}
              name={item}
              color={color}
              ingredientOpen={ingredientOpen}
              setIngredientOpen={setIngredientOpen}
            />
          ))}
        </Grid>
      </Box>
    );
  }
}

export default GroupOfItems;
