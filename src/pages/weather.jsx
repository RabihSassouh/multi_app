import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/weather.css';

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const Location = encodeURIComponent(location);
      const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${Location}&timesteps=daily&apikey=DVRUVM2WN25uug690nTnQq765za7c876`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSeeWeather = () => {
    if (location !== "") {
      fetchWeatherData();
    } else {
      setError("Please enter a location");
    }
  };

  return (
    <div className="weather-app">
      <h1 className="weather-header">Weather App</h1>
      <div className="section1">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-container"
          placeholder="Enter your location"
        />
        <button onClick={handleSeeWeather} className="input-button">See Weather</button>
      </div>
      {weather && (
        <div className="section2">
          <h2 className="section2-title">Forecast for the next 3 days</h2>
          {weather.timelines.daily.slice(0, 3).map((dailyForecast, index) => (
            <div key={index} className="days-container">
              <h3 className="each-day">Day {index + 1}</h3>
              <p className="temp">Temperature: {dailyForecast.values.temperatureAvg}°C</p>
              <p className="weather">Weather: {dailyForecast.values.weatherCode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Weather;
