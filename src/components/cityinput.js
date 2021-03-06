import React, { useState, useEffect } from "react";

export default function Cityinput({ setWeatherData, WeatherData, setDetaildata, detaildata, coordIndex}) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key !== "Enter") return;


    fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&lang=en&APPID=${apiKey}`)
    .then(function(response) {
      if (!response.ok) 
      {throw Error(setCity(""))}
      return response;
  })
      .then((response) => response.json())
      .then((carddata) => {
        setWeatherData((prevState) => [...prevState, carddata]);
        setCity("");
      });
  };

  useEffect(() => {
    const getWeekly = () => {
      const weatherdataIndex = WeatherData.length - 1
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${WeatherData[weatherdataIndex].coord.lat}&lon=${WeatherData[weatherdataIndex].coord.lon}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setDetaildata((prevState) => [...prevState, data])

        });
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
