import React, { useState } from "react"


function Cityinput() {
    const apiKey = process.env.REACT_APP_API_KEY
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
      if (event.key === "Enter") {
        fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&lang=en&APPID=${apiKey}`)
        .then( response => response.json())
         .then(
          data => {
            setWeatherData(data)
            console.log(data)
            setCity('')
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
        onKeyPress={getWeather}/>

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
    )
}

export default Cityinput
