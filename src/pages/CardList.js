import React from "react";
import WeatherCard from "./WeatherCard";

export default function cardList({ data }) {
    console.log(data)

    const ondelete = () => {
        // data aanpassen.
    }

  return <>
  {data.map(item => (
      <WeatherCard weatherData={item} key={item.coord}/>
  ))}
  </>;
}
