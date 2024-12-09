import React from "react";

type FooterProps = {
  value: string;
};

function Footer({ value }: FooterProps) {
  return (
    <div
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
        padding: "0",
        color: "red",
      }}
    >
      <h3>{value}</h3>
    </div>
  );
}

export default Footer;
