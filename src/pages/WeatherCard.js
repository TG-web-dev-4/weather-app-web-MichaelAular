import React, { useState } from "react"
import Pagebuttons from '../components/pagebuttons'

function WeatherCard ({weatherData}) {

  return (
    <div>
        {typeof weatherData.main === 'undefined' ? (
        <></>// do nothing
        ) : (
          <div className="card" >
            <p className="cityName">{weatherData.name}, {weatherData.sys.country}</p>
            <button className="close">X</button>
            <div className="cityData">
            <p>min temp: {Math.round(weatherData.main.temp_min)}℃</p>
            <p>max temp: {Math.round(weatherData.main.temp_max)}℃</p>
            <p>humidity: {weatherData.main.humidity}</p>
            <p>{weatherData.weather[0].main}</p>
            <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
            <p className="currentTemp">{Math.round(weatherData.main.temp_max)}°</p>
            </div>
            <Pagebuttons />
          </div>
        )}
        </div>
  );
}

export default WeatherCard