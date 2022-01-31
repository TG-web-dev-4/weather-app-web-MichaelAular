import React, { useState } from 'react';

const Accordion = ( { data } ) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [isActive, setIsActive] = useState(false);

    const date = new Date(data.dt*1000);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

      {date.toLocaleString("en-GB", { weekday: "short", month: "numeric",day: "numeric"  })} {data.temp.day}°C
      <img className="weatherIcon_small" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />


        <div className='accordion-item_toggle'>{isActive ? "⯆" : "⯅"}</div>
      </div>
      {isActive && <div className="accordion-item_content">
      <p><b>{date.toLocaleString("en-GB", { weekday: "short", month: "numeric",day: "numeric"  })}</b></p>
      <br></br>
      <p>Morning: {data.temp.morn}°C</p>
      <p>Afternoon: {data.temp.eve}°C</p>
      <p>Evening: {data.temp.day}°C</p>
      <p>Night: {data.temp.night}°C</p>
      <p>Humidity: {data.humidity}</p>
      <p>Windspeed: {data.wind_speed}</p>
      <p>{data.weather[0].description}</p>
      </div>}
    </div>
  );
};

export default Accordion;