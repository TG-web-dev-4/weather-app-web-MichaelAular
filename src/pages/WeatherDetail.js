import React, { useState } from "react";
import Pagebuttons from "../components/pagebuttons";
import Accordion from "../components/Accordion";

const accordionData = [
  { content: `dag 1 info` },
  { content: `dag 2 info` },
  { content: `dag 3 info` },
  { content: `dag 4 info` },
  { content: `dag 5 info` },
  { content: `dag 6 info` },
  { content: `dag 7 info` },
];



function WeatherDetail({ weatherData, detaildata }) {
  const { content, setContent } = accordionData;
  const [isActive, setIsActive] = useState(false);

  const detaildataIndex = detaildata.length - 1

  return (
    <div className="card">
      {typeof weatherData.main === "undefined" ? (
        <></> // do nothing
      ) : (
        <div>
          <React.Fragment>
            <div className="accordion">
              <div className="accordion-title">
                {weatherData.name}, {weatherData.sys.country}
                <button className="close">X</button>
              </div>

              <div className="accordion">
                {/* daily.unshift() daily[0-6] */}
                {detaildata[detaildataIndex] && detaildata[detaildataIndex].daily.map((day, i) => {
                  if (i === 0 || i >= 8 ) return
                return  <Accordion key={i} data={day} />
})}
              </div>
            </div>
          </React.Fragment>
          {/* <Pagebuttons /> */}
        </div>
      )}
    </div>
  );
}

export default WeatherDetail;
