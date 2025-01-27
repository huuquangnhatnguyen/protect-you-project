import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  SeasonalDataType,
  seasonalIngredientsType,
} from "../../@types/Dashboard/data.type";
import GroupOfItems from "../../components/GroupOfItems";
import { DocumentData } from "firebase/firestore";

type NutritionProps = {
  data: DocumentData;
};

function Nutrition({ data }: NutritionProps) {
  const seasonalIngredientGroups =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.name
        )
      : [];
  const seasonalIngredients =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.examples
        )
      : [];
  const colorMapping =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.color
        )
      : [];
  return (
    <Box sx={{ flexGrow: 1, height: "430px", margin: "auto" }}>
      <Grid container spacing={1} direction={"row"}>
        {seasonalIngredientGroups.map((group, index) => (
          <GroupOfItems
            key={group}
            title={group}
            items={seasonalIngredients[index]}
            color={colorMapping[index]}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Nutrition;
