import React, { useState } from "react"

function WeatherCard ({weatherData}) {

  return (
    <div className="container card">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p className="welcome">Welcome to WeatherApp please enter a City.</p>
          </div>
        ) : (
          <div>
            <p>{weatherData.name}, {weatherData.sys.country}</p>
            <p className="temp">min temp: {Math.round(weatherData.main.temp_min)}℃</p>
            <p className="temp">max temp: {Math.round(weatherData.main.temp_max)}℃</p>
            <p>{weatherData.weather[0].main}</p>
            <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
          </div>
        )}
    </div>
  );
}

export default WeatherCard