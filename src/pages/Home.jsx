import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Welcome to multi app</h1>
      <div>
        <button onClick={goToWeather}>Weather forecast</button>
      </div>
      <div>
        <button onClick={goToCalculator}>Calculator</button>
      </div>
      <div>
        <button onClick={goToStickyNotes}>Sticky notes</button>
      </div>
    </div>
  );
};

export default Home;
