import React, { useState } from "react"
import './css/App.css'
import CityInput from './components/cityinput'
import CardList from "./pages/CardList";

function App() {
  const [carddata, setCarddata] = useState([]);
  const [detaildata, setDetaildata] = useState([]);

  return (
    <div className="App">
      <CityInput setWeatherData={setCarddata} WeatherData={carddata} Detaildata={detaildata} setDetaildata={setDetaildata} />
      <CardList carddata={carddata} detaildata={detaildata} setCarddata={setCarddata} setDetaildata={setDetaildata} />

    </div>
  );
}

export default App;
