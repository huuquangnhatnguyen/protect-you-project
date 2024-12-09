import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  DiseaseInfoType,
  SeasonalDataType,
  seasonalIngredientsType,
} from "../../@types/Dashboard/data.type";
import ItemCard from "../../components/ItemCard";
import PopUp from "../../components/Popup";

type DashboardPropTypes = {
  currentSeason: string;
  data: SeasonalDataType;
  curPage?: string;
  setCurPage: (newValue: string) => void;
};

function Dashboard({ currentSeason, data, setCurPage }: DashboardPropTypes) {
  const commonDiseases =
    data && data["commonDiseases"]
      ? data["commonDiseases"].map((disease: DiseaseInfoType) => disease)
      : [];

  const advisoryNutrients = data && data["advisoryNutrients"];

  const seasonalIngredientGroups =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.name
        )
      : [];

  return (
    <Box sx={{ flexGrow: 1, height: "430px" }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid sx={{ height: "240px", justifyContent: "center" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "0 auto",
            }}
          >{`${currentSeason}'s common diseases:`}</h1>
          {commonDiseases &&
            commonDiseases.map((disease: DiseaseInfoType) => (
              // <Item key={disease}>{disease}</Item>
              <PopUp key={disease.name} disease={disease} />
            ))}
        </Grid>

        <Grid container sx={{ height: "190px" }}>
          <Grid size={6}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                margin: "0 auto",
              }}
            >
              Advisory Nutrients
            </h2>
            <Grid
              container
              sx={{
                flexGrow: 1.2,
                alignItems: "center",
                margin: "auto",
                marginTop: "1.2rem",
              }}
            >
              {advisoryNutrients &&
                advisoryNutrients.map((nutrient: string) => (
                  <ItemCard key={nutrient} name={nutrient} />
                ))}
            </Grid>
          </Grid>
          <Grid size={6}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                margin: "0 auto",
              }}
            >
              Seasonal Ingredients
            </h2>
            <Grid
              container
              sx={{
                flexGrow: 1.2,
                alignItems: "center",
                margin: "auto",
                marginTop: "1.2rem",
              }}
            >
              {seasonalIngredientGroups &&
                seasonalIngredientGroups.map((ingredient: string) => (
                  <ItemCard
                    key={ingredient}
                    name={ingredient}
                    setCurPage={setCurPage}
                  />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
