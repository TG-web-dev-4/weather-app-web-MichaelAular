import React, { useState } from "react"
// import { Routes, Route } from "react-router-dom";
import './css/App.css'
import CityInput from './components/cityinput'
import WeatherCard from './pages/WeatherCard'
import WeatherDetail from './pages/WeatherDetail'
import CardList from "./pages/CardList";

function App() {
  const [carddata, setCarddata] = useState([]);
  const [detail, setDetail] = useState([]);
  const [coords, setCoords] = useState([]);

  return (
    <div className="App">
      <CityInput setWeatherData={setCarddata} WeatherData={carddata} coords={coords} setCoords={setCoords} />
      <CardList carddata={carddata} detail={detail} WeatherCard={WeatherCard} WeatherDetail={WeatherDetail}/>

      {/* <Routes>
        <Route path="/" element={<WeatherCard weatherData={carddata} />} />
        <Route path="/WeatherCard" element={<WeatherCard weatherData={carddata}/>}  />
        <Route path="/WeatherDetail" element={<WeatherDetail weatherData={carddata}/>} />
      </Routes> */}

    </div>
  );
}

export default App;
