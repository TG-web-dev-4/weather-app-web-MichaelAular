import React, { useState } from "react"


function Cityinput() {
    const apiKey = process.env.REACT_APP_API_KEY
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (e) => {
      if (e.key == "Enter") {
        fetch('api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}').then(
          response => response.json()
        ).then(
          data => {
            setWeatherData(data)
          }
        )
      }
    }

    return (
      <div className="container">
        <input className="input"
        placeholder="Enter City..."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />
      </div>

    )
}

export default Cityinput
