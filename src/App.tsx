import { Divider } from "@mui/material";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { db } from "./config/firebase.js";
import { MyContext } from "./context/MyContext.js";
import Contacts from "./sections/Contacts";
import FeaturesSection from "./sections/Features";
import HeroSection from "./sections/Hero";
import InterfaceMockup from "./sections/InterfaceMockupSection";
import Viewpoint360 from "./sections/Viewpoint360";

function App() {
  const [dataDB, setDataDB] = useState<DocumentData>({});
  const dbCollectionRef = collection(db, "Winter");
  const [currentSeason, setSeason] = useState("fall");

  useEffect(() => {
    const getData = async () => {
      try {
        // get all data from the collection
        const data = await getDocs(dbCollectionRef);
        const filteredData = data.docs.map((doc) => doc.data());
        let curSeasonIndex;
        // get current season
        const getSeason = () => {
          const month = new Date().getMonth();
          if (month >= 2 && month <= 4) {
            curSeasonIndex = 0;
            return "Spring";
          } else if (month >= 5 && month <= 7) {
            return "Summer";
          } else if (month >= 8 && month <= 10) {
            return "Autumn";
          } else {
            curSeasonIndex = 1;
            return "Winter";
          }
        };

        setSeason(getSeason());
        setDataDB(filteredData[curSeasonIndex]);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getSeason = () => {
      const month = new Date().getMonth();
      if (month >= 2 && month <= 4) {
        return "Spring";
      } else if (month >= 5 && month <= 7) {
        return "Summer";
      } else if (month >= 8 && month <= 10) {
        return "Autumn";
      } else {
        return "Winter";
      }
    };
    setSeason(getSeason());
  }, []);

  return (
    <MyContext.Provider value={{ dataDB, currentSeason }}>
      <Navbar />
      <div className="main__container">
        <HeroSection />
        <Divider />
        <FeaturesSection />
        <Divider />

        <InterfaceMockup />
        <Divider />

        {/* <Viewpoint360 /> */}
        <Divider />

        <Contacts />
      </div>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
