import React, { useState } from "react"

function WeatherDetail({weatherData}) {

  return (
    <div className="container">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p>Welcome to WeatherApp please enter a City.</p>
          </div>
        ) : (
          <div>
            <p>{weatherData.name}</p>
            <p>{Math.round(weatherData.main.temp)}℃</p>
            <p>{weatherData.weather[0].main}</p>
          </div>
        )}
    </div>
  );
}

export default WeatherDetail
