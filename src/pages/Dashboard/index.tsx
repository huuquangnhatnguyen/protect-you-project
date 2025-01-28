import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  DiseaseInfoType,
  SeasonalDataType,
  seasonalIngredientsType,
} from "../../@types/Dashboard/data.type";
import ItemCard from "../../components/ItemCard";
import { colors, Modal, Paper, styled, Typography } from "@mui/material";
import { DocumentData } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: colors.grey[900],
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

type DashboardPropTypes = {
  currentSeason: string;
  data: DocumentData;
  curPage?: string;
  setCurPage: (newValue: string) => void;
};

function Dashboard({ currentSeason, data, setCurPage }: DashboardPropTypes) {
  const [open, setOpen] = React.useState(false);
  const [curDiseaseInfo, setCurDiseaseInfo] = React.useState<DiseaseInfoType>();

  const handleDevicePopupClose = () => {
    setOpen(false);
    setCurDiseaseInfo(undefined);
  };

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
            commonDiseases.map((disease: DiseaseInfoType) => {
              return (
                // <Item key={disease}>{disease}</Item>
                // <PopUp key={disease.name} disease={disease} />

                <Item
                  key={disease.name}
                  onClick={() => {
                    setCurDiseaseInfo(disease);
                    setOpen(true);
                  }}
                >
                  {disease.name}
                </Item>
              );
            })}
          <Modal
            disablePortal
            open={open}
            onClose={handleDevicePopupClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slotProps={{
              root: {
                style: {
                  position: "relative",
                  top: "-280px",
                },
              },
              backdrop: {
                style: {
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  height: "538px",
                },
              },
            }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {curDiseaseInfo?.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {curDiseaseInfo?.description}
              </Typography>
            </Box>
          </Modal>
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
                  <ItemCard
                    key={nutrient}
                    name={nutrient}
                    setCurPage={setCurPage}
                  />
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
