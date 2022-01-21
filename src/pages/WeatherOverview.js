import React, { useState } from "react"

function WeatherOverview ({weatherData}) {

  return (
    <div className="card overviewCard">
        {typeof weatherData.main === 'undefined' ? (
          <div>
            <p className="welcome">Overview.</p>
          </div>
        ) : (
        <>
          <div className="overviewItem">
            <p className="overviewItem_text">{weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main} {Math.round(weatherData.main.temp_max)}℃</p>
            <img className="overviewItem_icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>

          <div className="overviewItem">
            <p className="overviewItem_text">{weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main} {Math.round(weatherData.main.temp_max)}℃</p>
            <img className="overviewItem_icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>

          <div className="overviewItem">
            <p className="overviewItem_text">{weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main} {Math.round(weatherData.main.temp_max)}℃</p>
            <img className="overviewItem_icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>

          <div className="overviewItem">
            <p className="overviewItem_text">{weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main} {Math.round(weatherData.main.temp_max)}℃</p>
            <img className="overviewItem_icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>

          <div className="overviewItem">
            <p className="overviewItem_text">{weatherData.name}, {weatherData.sys.country}: {weatherData.weather[0].main} {Math.round(weatherData.main.temp_max)}℃</p>
            <img className="overviewItem_icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
          </div>

        </>
        )}
    </div>
  );
}

export default WeatherOverview