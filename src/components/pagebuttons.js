import WeatherCard from '../pages/WeatherCard'
import WeatherDetail from '../pages/WeatherDetail'
import { Routes, Route, Link } from "react-router-dom";

export default function Pagebuttons() {

  return(
    <div className="pageButtonContainer">
{/*
      <Link to='/WeatherCard'> */}
      <button className="pageBTN PBTN-Card" />
      {/* </Link> */}

      {/* <Link to='/WeatherDetail'> */}
      <button className="pageBTN PBTN-Detail" />
      {/* </Link> */}
    </div>
  )
}