import './css/App.css'
import CityInput from './components/cityinput'
import WeatherCard from './pages/WeatherCard'
import Pagebuttons from './components/pagebuttons'
import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState('')

  return (
    <div className="App">
      <CityInput setWeatherData={setData} />
      <WeatherCard weatherData={data}/>
      <Pagebuttons />
    </div>
  );
}

export default App;
