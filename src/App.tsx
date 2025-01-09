import { useEffect, useState } from "react";
import "./App.css";
import DeviceInterface from "./components/DeviceInterface";
import HeroSection from "./sections/Hero";
import InterfaceMockup from "./sections/InterfaceMockupSection";
import Viewpoint360 from "./sections/Viewpoint360";
import Contacts from "./sections/Contacts";

function App() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#282c34",
          padding: "1rem",
          color: "white",
          height: "fit-content",
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
            textAlign: "center",
            fontSize: "1rem",
          }}
        >
          My App
        </h2>
      </nav>
      <div
        style={{
          marginTop: "3.5rem",
          width: "100%",
        }}
      >
        <HeroSection />
        <InterfaceMockup />
        <Viewpoint360 />
        <Contacts />
      </div>
    </>
  );
}

export default App;
