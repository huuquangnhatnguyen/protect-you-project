import React from "react";

type DeviceFooterProps = {
  value: string;
};

function DeviceFooter({ value }: DeviceFooterProps) {
  return (
    <div
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        padding: "0",
        color: "red",
        borderTop: "1px solid #000",
      }}
    >
      <h3 style={{ marginTop: "1rem", color: "#212121" }}>{value}</h3>
    </div>
  );
}

export default DeviceFooter;
