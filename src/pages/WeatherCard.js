import React from "react"
import { MapContainer, TileLayer  } from 'react-leaflet'

function WeatherCard ({weatherData, index, setCarddata, setDetaildata }) {
  
  const removeHandler = () => {
    setCarddata(prevState => {
      const newState = [...prevState]
      newState.splice(index, 1)
      return newState
    })
    setDetaildata(prevState => {
      const newState = [...prevState]
      newState.splice(index, 1)
      return newState
    })
  }

  return (
    <div>
      {typeof weatherData.main === "undefined" ? (
        <></> // do nothing
      ) : (
        <div className="card">
          <p className="cityName">
            {weatherData.name}, {weatherData.sys.country}
          </p>
          <button onClick={removeHandler} className="close">X</button>
          <div className="cityData">
            <p>min temp: {Math.round(weatherData.main.temp_min)}℃</p>
            <p>max temp: {Math.round(weatherData.main.temp_max)}℃</p>
            <p>humidity: {weatherData.main.humidity}</p>
            <p>{weatherData.weather[0].description}</p>
            <p>Windspeed: {weatherData.wind.speed}</p>
            <p>Winddirection: {weatherData.wind.deg}</p>

            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            />
            <p className="currentTemp">
              {Math.round(weatherData.main.temp_max)}°
            </p>

            <div className="map">

              <MapContainer
                center={[weatherData.coord.lat, weatherData.coord.lon]}
                zoom={10}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard