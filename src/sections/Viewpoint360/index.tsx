import React from "react";
import PropTypes from "prop-types";
import DeviceInterface from "../../components/DeviceInterface";
import "./styles.scss";

Viewpoint360.propTypes = {};

function Viewpoint360(props) {
  return (
    <div className="perspective">
      <h1>360 Degree View of the Device </h1>

      <div className="box">
        <div className="cover top"></div>
        <div className="cover bottom"></div>
        <div className="face back"></div>
        <div className="face front">
          <DeviceInterface />
        </div>
        <div className="side left"></div>
        <div className="side right"></div>
      </div>
    </div>
  );
}

export default Viewpoint360;
