import './css/App.css'
import CityInput from './components/cityinput'
import WeatherDetail from './pages/WeatherDetail'
import React, { useState, useEffect } from "react"


function App() {
  const [weatherData, setWeatherData] = useState(null)
  const apiKey = process.env.REACT_APP_API_KEY

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${CityInput.city}&units=metric&lang=en&APPID=${apiKey}`)
  //   .then( response => response.json())
  //      .then(
  //       data => {
  //         setWeatherData(data)
  //         console.log(data)
  //       }
  //      )
  // },[])

  return (
    <div className="App">
      <CityInput />
      <WeatherDetail />
    </div>
  );
}

export default App;
