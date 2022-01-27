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
      <b>{date.toLocaleString("en-GB", { weekday: "short", month: "numeric",day: "numeric"  })}</b><br></br>
      <br></br>
      Morning: {data.temp.morn}°C<br></br>
      Afternoon: {data.temp.eve}°C<br></br>
      Evening: {data.temp.day}°C<br></br>
      Night: {data.temp.night}°C<br></br>
      Humidity: {data.humidity}<br></br>
      Windspeed: {data.wind_speed}<br></br>
      {data.weather[0].description}
      </div>}
    </div>
  );
};

export default Accordion;