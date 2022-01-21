import WeatherCard from '../pages/WeatherCard'
import WeatherDetail from '../pages/WeatherDetail'
import WeatherOverview from '../pages/WeatherOverview'
import { Routes, Route, Link } from "react-router-dom";

export default function Pagebuttons({weatherData}) {

  return(
    <div className="pageButtonContainer">
      <Link to='/WeatherCard'>
      <button className="pageBTN PBTN-Card" />
      </Link>

      <Link to='/WeatherDetail'>
      <button className="pageBTN PBTN-Detail" />
      </Link>

      <Link to='/WeatherOverview'>
        <button className="pageBTN PBTN-Overview" />
      </Link>
    </div>
  )
}