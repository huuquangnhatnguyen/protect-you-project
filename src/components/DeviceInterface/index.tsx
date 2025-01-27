import { Container } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import mockNotification from "../../assets/mockData/mockNotification.json";
import { MyContext } from "../../context/MyContext";
import Alerts from "../../pages/Alert";
import Dashboard from "../../pages/Dashboard";
import Nutrition from "../../pages/Nutrition";
import DeviceFooter from "../DeviceFooter";
import Header from "../Header";
import "./styles.scss";

function DeviceInterface() {
  const [curPage, setCurPage] = useState("Dashboard");
  const { dataDB }: { dataDB: DocumentData } = useContext(MyContext);
  const curDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [currentSeason, setSeason] = useState("fall");

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
    <div className="mockup-container">
      <Container
        style={{
          backgroundColor: "white",
          padding: 2,
          paddingBottom: "0.5rem",
          borderRadius: "1rem",
          border: "5px solid",
          borderImage: "linear-gradient(to bottom, silver, black) 1",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.1)",
          height: "550px",
          width: "800px",
        }}
      >
        <Header curPage={curPage} setCurPage={setCurPage} />
        <div id="main-app">
          {curPage === "Dashboard" && (
            <Dashboard
              currentSeason={currentSeason}
              data={dataDB}
              setCurPage={setCurPage}
            />
          )}
          {curPage === "Nutrition" && <Nutrition data={dataDB} />}
          {curPage === "Alerts" && (
            <Alerts alerts={mockNotification["notifications"]} />
          )}
        </div>
        <DeviceFooter value={curDate} />
      </Container>
    </div>
  );
}

export default DeviceInterface;
