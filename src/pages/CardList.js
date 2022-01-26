import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherDetail from "./WeatherDetail";
import { v4 as uuidv4 } from 'uuid';


export default function cardList({ carddata }, { detail }) {
    // console.log(carddata)
    // console.log(detail)
    // const ondelete = () => {
    //     // data aanpassen.
    // }

  return (
  <div className="itemContainer">
  {carddata.map(item =>  {
  return < WeatherCard weatherData={item} key={uuidv4()}/>
    })}

  {carddata.map(item =>  {
  return < WeatherDetail weatherData={item} key={uuidv4()}/>
    })}
  </div>)
}
