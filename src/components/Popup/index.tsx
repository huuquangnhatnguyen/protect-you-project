import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { colors, Paper, styled } from "@mui/material";
import { DiseaseInfoType } from "../../@types/Dashboard/data.type";

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

type PopUpProps = {
  disease: DiseaseInfoType;
};

export default function PopUp({ disease }: PopUpProps) {
  const { name, description } = disease;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="popup__container">
      <Item onClick={handleOpen}>{name}</Item>
      <Modal
        disablePortal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          root: {
            style: {
              position: "relative",
            },
          },
          backdrop: {
            style: {
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              minWidth: "550px",
              height: "99%",
              minHeight: "550px",
            },
          },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
