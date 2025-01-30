import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { LocalContext } from "../LocalContext/localContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

IngredientModal.propTypes = {
  ingredientOpen: PropTypes.bool,
  handleDevicePopupClose: PropTypes.func,
  ingredientName: PropTypes.string,
  imageUrl: PropTypes.string,
  nutrientList: PropTypes.array,
};

function IngredientModal({ ingredientOpen, handleDevicePopupClose }) {
  const { currentChosenIngredient } = useContext(LocalContext);
  console.log("ingredientName:", currentChosenIngredient);
  return (
    <Modal
      disablePortal
      open={ingredientOpen}
      onClose={handleDevicePopupClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        root: {
          style: {
            position: "relative",
            top: "-498px",
          },
        },
        backdrop: {
          style: {
            position: "relative",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "558px",
          },
        },
      }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Placeholder Title
        </Typography>
        <Typography id="modal-modal-description">
          Nutrients: List of nutrients
        </Typography>
        <Grid container spacing={2} direction={"column"} sx={{ mt: 2 }}>
          <Typography id="ingredient-info">Last bought: 2 days ago</Typography>
          <Typography id="ingredient-info">
            Remaining in the fridge: 3
          </Typography>
          <Typography id="ingredient-info">
            Place holder for adding more in the shopping list
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
}

export default IngredientModal;
