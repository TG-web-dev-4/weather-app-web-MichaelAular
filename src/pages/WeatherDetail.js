import React, { useState } from "react";
import Accordion from "../components/Accordion";


function WeatherDetail({ weatherData, detaildata, detaildataIndex }) {


  return (
    <div className="card">
      {typeof weatherData.main === "undefined" ? (
        <></> // do nothing
      ) : (
        <div>
            <div className="accordion">
              <div className="accordion-title">
                {weatherData.name}, {weatherData.sys.country}
                <button className="close">X</button>
              </div>

              <div className="accordion">
                {detaildata[detaildataIndex] && detaildata[detaildataIndex].daily.map((day, i) => {
                  if (i === 0 || i >= 8 ) return
                return  <Accordion key={i} data={day} />
})}
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDetail;
