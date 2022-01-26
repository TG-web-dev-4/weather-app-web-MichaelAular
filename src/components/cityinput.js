import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function Cityinput({ setWeatherData, WeatherData, setCoords, coords}) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("");


  const getWeather = (event) => {
    if (event.key !== "Enter") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&lang=en&APPID=${apiKey}`
    )
      .then((response) => response.json())
      .then((carddata) => {
        setWeatherData((prevState) => [...prevState, carddata]);
        setCoords((prevState) => [...prevState, WeatherData.coord]);
        setCity("");
        // console.log( WeatherData );
        console.log( coords );
      });
  };

  useEffect(() => {
    const getWeekly = () => {
      const coordIndex = WeatherData.length - 1
      console.log(WeatherData)
      console.log(WeatherData[coordIndex].coord)

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${WeatherData[coordIndex].coord.lat}&lon=${WeatherData[coordIndex].coord.lon}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((detail) => {
          setDetail((prevState) => [...prevState, detail]);
          console.log(detail)
        });
        // console.log("fetch2: " + detail);
    };

    if (WeatherData.length > 0) getWeekly()
  }, [WeatherData]);


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
