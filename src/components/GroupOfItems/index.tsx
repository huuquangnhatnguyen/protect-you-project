import React from "react";
import Grid from "@mui/material/Grid2";
import ItemCard from "../ItemCard";
import { Box } from "@mui/material";

type GroupOfItemsPropTypes = {
  title: string;
  items: Array<string>;
  color: string;
};

function GroupOfItems({ title, items, color }: GroupOfItemsPropTypes) {
  console.log(title, items);
  return (
    <Box
      sx={{
        margin: "10px auto",
        backgroundColor: color,
        padding: "10px",
        textAlign: "center",
        color: "black",
        width: "fit-content",
        borderRadius: "15px",
        minWidth: "25%",
        height: "fit-content",
      }}
    >
      <h2
        style={{
          margin: "0",
        }}
      >
        {title}
      </h2>
      <Grid
        container
        spacing={1}
        direction={"row"}
        sx={{ justifyContent: "space-around" }}
      >
        {items.map((item) => (
          <ItemCard key={item} name={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default GroupOfItems;
