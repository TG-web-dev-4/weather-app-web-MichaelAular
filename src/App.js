import './css/App.css'
import CityInput from './components/cityinput'
import WeatherCard from './pages/WeatherCard'
import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState('')

  return (
    <div className="App">
      <CityInput setWeatherData={setData} />
      <WeatherCard weatherData={data}/>
    </div>
  );
}

export default App;
