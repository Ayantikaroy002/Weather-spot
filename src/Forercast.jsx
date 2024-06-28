import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const day = new Date().getDate();
  const days = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day));

  return (
    <div className="left flex flex-col w-1/2">
      <h1 className="text-xl flex flexbox pt-14 px-6 text-gray-100 font-semibold">
        7-DAY FORECAST
      </h1>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => {
          const iconCode = item.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="grid grid-cols-3">
                    <div className="day mx-10 text-gray-100 pt-10 text-left">
                      {days[idx]}
                    </div>
                    <div className="mx-10 text-gray-100 pt-10 text-left">
                      <img
                        className="h-full py-1"
                        src={iconUrl}
                        alt="Weather icon"
                        id={`icon-${iconCode}`}
                      />
                      <label className="description">
                        {item.weather[0].main}
                      </label>
                    </div>
                    <div className="min/max mx-10 text-gray-100 pt-10 text-left">
                      {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
