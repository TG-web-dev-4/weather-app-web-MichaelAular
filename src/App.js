import './css/App.css'
import CityInput from './components/cityinput'
import WeatherDetail from './pages/WeatherDetail'
import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState('')

  return (
    <div className="App">
      <CityInput setWeatherData={setData} />
      <WeatherDetail weatherData={data}/>
    </div>
  );
}

export default App;
