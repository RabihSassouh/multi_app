import React, { useState, useEffect } from "react";
import axios from "axios";
// import './Weather.css';

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
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
        />
        <button onClick={handleSeeWeather}>See Weather</button>
      </div>
      {weather && (
        <div>
          <h2>Forecast for the next 3 days</h2>
          {weather.timelines.daily.slice(0, 3).map((dailyForecast, index) => (
            <div key={index}>
              <h3>Day {index + 1}</h3>
              <p>Temperature: {dailyForecast.values.temperatureAvg}°C</p>
              <p>Weather: {dailyForecast.values.weatherCode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Weather;
