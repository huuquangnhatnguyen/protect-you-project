import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import {
  DiseaseInfoType,
  SeasonalDataType,
  seasonalIngredientsType,
} from "../../@types/Dashboard/data.type";
import ItemCard from "../../components/ItemCard";

type DashboardPropTypes = {
  currentSeason: string;
  data: SeasonalDataType;
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
  fontSize: "1.2rem",
  boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
  width: "fit-content",
  minWidth: "50%",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    fontWeight: "bold",
  },
  height: "fit-content",
}));

function Dashboard({ currentSeason, data }: DashboardPropTypes) {
  const commonDiseases =
    data && data["commonDiseases"]
      ? data["commonDiseases"].map((disease: DiseaseInfoType) => disease.name)
      : [];

  const advisoryNutrients = data && data["advisoryNutrients"];

  const seasonalIngredients =
    data && data["seasonalIngredients"]
      ? data["seasonalIngredients"].map(
          (ingredient: seasonalIngredientsType) => ingredient.name
        )
      : [];

  console.log(seasonalIngredients);

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
            commonDiseases.map((disease: string) => (
              <Item key={disease}>{disease}</Item>
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
              {seasonalIngredients &&
                seasonalIngredients.map((ingredient: string) => (
                  <ItemCard key={ingredient} name={ingredient} />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
