import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import './css/App.css'
import CityInput from './components/cityinput'
import WeatherCard from './pages/WeatherCard'
import WeatherDetail from './pages/WeatherDetail'
import WeatherOverview from './pages/WeatherOverview'
import Pagebuttons from './components/pagebuttons'



function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <CityInput setWeatherData={setData} />
      <Routes>
        <Route
          path="/WeatherCard"
          element={<WeatherCard weatherData={data} />}
        />
        <Route
          path="/WeatherDetail"
          element={<WeatherDetail weatherData={data} />}
        />
        <Route
          path="/WeatherOverview"
          element={<WeatherOverview weatherData={data} />}
        />
      </Routes>
      <Pagebuttons weatherData={data} />
    </div>
  );
}


export default App;
