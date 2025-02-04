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
const Forecast = ({ data, isFahrenheit }) => {
  const day = new Date().getDate();
  const days = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day));

  return (
    <div className="left flex flex-col mx-5 md:mx-10 lg:mx-0 max-w-screen-xl lg:-ml-0 bg-[#153e67]  mb-11 lg:mt-7 rounded-3xl pb-5 lg:pb-0">
      <h1 className="md:text-3xl text-xl flex flexbox pt-5 md:pt-12 px-6 text-gray-100 font-semibold">
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
                    <div className="day md:mx-16 mx-5 text-gray-100 md:pt-12 pt-8 text-left">
                      {days[idx]}
                    </div>
                    <div className="md:mx-10 mx-5 text-gray-100 pt-8 text-left">
                      <img
                        className="h-20 lg:h-full py-1"
                        src={iconUrl}
                        alt="Weather icon"
                        id={`icon-${iconCode}`}
                      />
                      <label className="description ml-2 md:ml-0">
                        {item.weather[0].main}
                      </label>
                    </div>
                    <div className="min/max md:mx-16 mx-5 text-gray-100 md:pt-10 pt-8 text-left">
                      {Math.round(item.main.temp_min)}°{isFahrenheit ? "F" : "C"} / {Math.round(item.main.temp_max)}°{isFahrenheit ? "F" : "C"}
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
