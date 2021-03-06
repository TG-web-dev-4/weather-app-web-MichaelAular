import React, { useState } from "react"
import WeatherCard from "./WeatherCard";
import WeatherDetail from "./WeatherDetail";
import { v4 as uuidv4 } from 'uuid';
import ReactCardFlip from 'react-card-flip';

export default function CardList({ carddata, detaildata, setCarddata, setDetaildata }) {
  const [isFlipped, setIsflipped] = useState(false);
  const handleClick = () => {
    setIsflipped(!isFlipped)
  }

  return (
    <>
    <button className="flipbutton" onClick={handleClick}></button>

  <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

  <div className="itemContainer">
  {carddata.map((item, index) =>  {
  return < WeatherCard weatherData={item} index={index} key={uuidv4()} setCarddata={setCarddata} setDetaildata={setDetaildata} /> })}
  </div>

  <div className="itemContainer">
  {carddata.map((item, index) =>  {
  return < WeatherDetail weatherData={item} detaildataIndex={index} detaildata={detaildata} key={uuidv4()} /> })}
  </div>

  </ReactCardFlip>
  </>
  )
}
