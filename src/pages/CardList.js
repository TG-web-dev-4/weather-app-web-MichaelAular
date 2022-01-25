import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherDetail from "./WeatherDetail";
import { v4 as uuidv4 } from 'uuid';


export default function cardList({ data }) {
    console.log(data)

    const ondelete = () => {
        // data aanpassen.
    }

  return (
  <div className="itemContainer">
  {data.map(item => ( < WeatherCard weatherData={item} key={uuidv4()}/> ) )}
  {data.map(item => ( < WeatherDetail weatherData={item} key={uuidv4()}/> ) )}

  </div>)
}
