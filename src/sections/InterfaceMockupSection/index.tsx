import { useEffect, useState } from "react";

import "./styles.scss";
import DeviceInterface from "../../components/DeviceInterface";

function InterfaceMockup() {
  return (
    <div className="mockup-container">
      <h1>Interactive Interface </h1>
      <p>Click on the buttons to interact with the device</p>
      <DeviceInterface />
    </div>
  );
}

export default InterfaceMockup;
