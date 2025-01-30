import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  SeasonalDataType,
  seasonalIngredientsType,
} from "../../@types/Dashboard/data.type";
import GroupOfItems from "../../components/GroupOfItems";
import { DocumentData } from "firebase/firestore";
import { colors, Modal, Typography } from "@mui/material";
import IngredientModal from "./IngredientModal";
import { LocalContext } from "./LocalContext/localContext";

type NutritionProps = {
  data: DocumentData;
  chosenGroup?: string;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

function Nutrition({ data, chosenGroup }: NutritionProps) {
  const [chosenIngredientName, setChosenIngredientName] = React.useState(
    "the ingredient is new"
  );
  const [ingredientOpen, setIngredientOpen] = React.useState(false);
  const handleDevicePopupClose = () => {
    setIngredientOpen(false);
  };

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
  const nutrients =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.nutrients
        )
      : [];

  return (
    <LocalContext.Provider
      value={{ currentChosenIngredient: chosenIngredientName }}
    >
      <Box sx={{ flexGrow: 1, height: "450px", margin: "auto" }}>
        <Grid container spacing={1} direction={"row"}>
          {seasonalIngredientGroups.map((group, index) => (
            <GroupOfItems
              key={group}
              title={group}
              items={seasonalIngredients[index]}
              color={colorMapping[index]}
              chosenGroup=""
              ingredientOpen={ingredientOpen}
              setIngredientOpen={setIngredientOpen}
              nutrients={nutrients[index]}
            />
          ))}
        </Grid>
        <IngredientModal
          ingredientOpen={ingredientOpen}
          handleDevicePopupClose={handleDevicePopupClose}
        />
      </Box>
    </LocalContext.Provider>
  );
}

export default Nutrition;
