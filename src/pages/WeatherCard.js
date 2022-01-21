import React, { useState } from "react"

function WeatherCard ({weatherData}) {

  return (
    <div className="card">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p className="welcome">Welcome to WeatherApp please enter a City.</p>
          </div>
        ) : (
          <div>
            <p className="cityname">{weatherData.name}, {weatherData.sys.country}</p>
            <p>min temp: {Math.round(weatherData.main.temp_min)}℃</p>
            <p>max temp: {Math.round(weatherData.main.temp_max)}℃</p>
            <p>humidity: {weatherData.main.humidity}</p>
            <p>{weatherData.weather[0].main}</p>
            <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
            <p className="currentTemp">{Math.round(weatherData.main.temp_max)}℃</p>
          </div>
        )}
    </div>
  );
}

export default WeatherCard