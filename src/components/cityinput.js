import React, { useState } from "react";

export default function Cityinput( {setWeatherData} ) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("");


  const getWeather = (event) => {
    if (event.key !== "Enter") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&lang=en&APPID=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity("");
      }
    );
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
    </div>
  );
}