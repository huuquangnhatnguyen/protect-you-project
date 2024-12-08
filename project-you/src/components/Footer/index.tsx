import React from "react";
import PropTypes from "prop-types";

Footer.propTypes = {
  value: PropTypes.string,
};

function Footer(props: any) {
  const { value } = props;
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
