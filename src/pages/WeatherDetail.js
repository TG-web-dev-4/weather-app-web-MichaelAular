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

function WeatherDetail({ weatherData }) {
  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);

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
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
          </React.Fragment>
          <Pagebuttons />
        </div>
      )}
    </div>
  );
}

export default WeatherDetail;
