import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import Alerts from "./pages/Alert";
import Footer from "./components/Footer";
import mockData from "./assets/mockData/mockData.json";
import mockNotification from "./assets/mockData/mockNotification.json";
import HeroSection from "./sections/Hero";

function App() {
  const [curPage, setCurPage] = useState("Dashboard");
  const curDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [currentSeason, setSeason] = useState("fall");
  // const [data, setData] = useState(mockData);
  // console.log(mockData);

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
        <h2>My App</h2>
      </nav>
      <div
        style={{
          marginTop: "8rem",
          width: "100%",
        }}
      >
        <div>
          THIS IS HERO SECTION
          <HeroSection  />
        </div>

        <div className="perspective">
        <div className="box">
          <div className="cover top"></div>
          <div className="cover bottom"></div>
          <div className="face back"></div>
          <div className="face front">
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
                    data={mockData[currentSeason]}
                    setCurPage={setCurPage}
                  />
                )}
                {curPage === "Nutrition" && (
                  <Nutrition data={mockData[currentSeason]} />
                )}
                {curPage === "Alerts" && (
                  <Alerts alerts={mockNotification["notifications"]} />
                )}
              </div>
              <Footer value={curDate} />
            </Container>
          </div>
          <div className="side left"></div>
          <div className="side right"></div>
        </div>
      </div>

      </div>


    </>
  );
}

export default App;
