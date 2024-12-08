import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Nutrition from "./pages/Nutrition";
import Alerts from "./pages/Alert";
import Footer from "./components/Footer";
import mockData from "./assets/mockData/mockData.json";

function App() {
  const [count, setCount] = useState(0);
  const [curPage, setCurPage] = useState("Dashboard");
  const curDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [currentSeason, setSeason] = useState("fall");
  const [data, setData] = useState(mockData);

  useEffect(() => {
    const getSeason = () => {
      const month = new Date().getMonth();
      if (month >= 2 && month <= 4) {
        return "spring";
      } else if (month >= 5 && month <= 7) {
        return "summer";
      } else if (month >= 8 && month <= 10) {
        return "autumn";
      } else {
        return "winter";
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
      <Container
        style={{
          marginTop: "5rem",
          backgroundColor: "white",
          padding: 0,
          paddingBottom: "0.5rem",
          borderRadius: "1rem",
          border: "5px solid black",
          height: "600px",
          width: "800px",
        }}
      >
        <Header curPage={curPage} setCurPage={setCurPage} />
        <div id="main-app">
          {curPage === "Dashboard" && (
            <Dashboard currentSeason={currentSeason} data={mockData} />
          )}
          {curPage === "Nutrition" && <Nutrition />}
          {curPage === "Alerts" && <Alerts />}
        </div>
        <Footer value={curDate} />
      </Container>
    </>
  );
}

export default App;
