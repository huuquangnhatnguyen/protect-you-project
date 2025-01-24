import { useEffect, useState } from "react";
import "./App.scss";
import HeroSection from "./sections/Hero";
import InterfaceMockup from "./sections/InterfaceMockupSection";
import Viewpoint360 from "./sections/Viewpoint360";
import Contacts from "./sections/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeaturesSection from "./sections/Features";
import { Divider } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <div className="main__container">
        <HeroSection />
        <Divider />
        <FeaturesSection />
        <Divider />

        <InterfaceMockup />
        <Divider />

        <Viewpoint360 />
        <Divider />

        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
