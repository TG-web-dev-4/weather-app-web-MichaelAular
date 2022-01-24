import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";
import './css/App.css'
import CityInput from './components/cityinput'
import WeatherCard from './pages/WeatherCard'
import WeatherDetail from './pages/WeatherDetail'
import WeatherOverview from './pages/WeatherOverview'
import CardList from "./pages/CardList";


function App() {
  const [data, setData] = useState([]);
  // const [overview, setOverview] = useState("")

  return (
    <div className="App">
      <CityInput setWeatherData={setData}/>
      <CardList data={data} WeatherCard={WeatherCard}/>

      <Routes>
        <Route path="/" element={<WeatherCard weatherData={data} />} />
        <Route path="/WeatherCard" element={<WeatherCard weatherData={data}/>}  />
        <Route path="/WeatherDetail" element={<WeatherDetail weatherData={data}/>} />
        <Route path="/WeatherOverview" element={<WeatherOverview weatherData={data}/>} />
      </Routes>

    </div>
  );
}

export default App;
