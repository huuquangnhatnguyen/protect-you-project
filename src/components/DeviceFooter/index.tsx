import React from "react";

type DeviceFooterProps = {
  curDate: string;
  curTime: string;
};

function DeviceFooter({ curDate, curTime }: DeviceFooterProps) {
  return (
    <div
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        color: "red",
        borderTop: "1px solid #000",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h3 style={{ marginTop: "1rem", color: "#212121" }}>{curDate}</h3>
      <h3 style={{ marginTop: "1rem", color: "#212121" }}>{curTime}</h3>
    </div>
  );
}

export default DeviceFooter;
