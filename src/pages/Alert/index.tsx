import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { NoficationType } from "../../@types/Dashboard/data.type";
import Notification from "../../components/Notification";

type AlertsProps = {
  alerts: Array<NoficationType>;
};

function Alerts({ alerts }: AlertsProps) {
  console.log(alerts);
  return (
    <Box sx={{ flexGrow: 1, height: "450px" }}>
      <Grid container spacing={2} direction={"column"}>
        {alerts
          ? alerts.map((alert) => (
              <Notification
                key={alert.title}
                title={alert.title}
                content={alert.content}
                time={alert.time}
                type={alert.type}
              />
            ))
          : []}
      </Grid>
    </Box>
  );
}
export default Alerts;
