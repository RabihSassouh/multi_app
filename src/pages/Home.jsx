import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToWeather = () => {
    navigate("/weather");
  };

  const goToCalculator = () => {
    navigate("/calculator");
  };

  const goToStickyNotes = () => {
    navigate("/sticky-notes");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to multi app</h1>
      <div className="home-buttons">
        <button onClick={goToWeather}>Weather forecast</button>
        <button onClick={goToCalculator}>Calculator</button>
        <button onClick={goToStickyNotes}>Sticky notes</button>
      </div>
    </div>
  );
};

export default Home;
