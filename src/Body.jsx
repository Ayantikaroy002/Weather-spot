import React from "react";

const Body = ({ data }) => {
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <div className="slider flex flex-col w-2/4 bg-[#141415]">
      <div className="flex flex-row bg-[#141415]">
        <div className="left flex flex-col justify-center items-baseline">
          <h1 className="text-7xl mx-20 pt-14 text-gray-100 px-6 font-semibold">
            {data.name}
          </h1>
          <p className=" text-gray-100 text-xl pl-7 pt-4">
            {data.weather[0].description}, Feels like {data.main.feels_like}°C
          </p>
          <p className="text-5xl mx-20 text-gray-100 pl-5 pt-14 text-left">
            {data.main.temp} °C
          </p>
        </div>
        <div className="right flex flex-row py-14 w-2/3">
          <img
            className="h-full py-1"
            src={iconUrl}
            alt="Weather icon"
            id={`icon-${iconCode}`}
          />
        </div>
      </div>
      <div className="left flex flex-col justify-center pb-4 mt-10 items-baseline mr-7 ">
        <h1 className="text-5xl mx-20 py-4 text-gray-100 px-6 font-semibold">
          Today
        </h1>
        <div className="grid grid-cols-2 w-full pr-20">
          <div>
          <div className="display flex flex-row">
          <img className=" h-10 w-10 mt-10 " src="../thermometer.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Max</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {data.main.temp_max}
            </p>
          </div>
          <div>
          <div className="display flex flex-row">
          <img className=" h-10 w-10 mt-10 " src="../thermometer.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Min</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {data.main.temp_min}
            </p>
          </div>
          <div>
          <div className="display flex flex-row">
          <img className=" h-10 w-10 mt-9 " src="../sunrise.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Sunrise</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div>
          <div className="display flex flex-row">
          <img className=" h-10 w-10 mt-9 " src="../sunset.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Sunset</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
      <div className="left flex flex-col justify-center pb-7 items-baseline mr-7 ">
        <h1 className="text-5xl mx-20 py-4 text-gray-100 px-6 font-semibold">
          Air Conditions
        </h1>
        <div className="grid grid-cols-2 w-full pr-20">
          <div>
          <div className="display flex flex-row">
          <img className=" h-10 w-10 mt-10 " src="../gauge.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Pressure</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {data.main.pressure} hPa
            </p>
          </div>
          <div>
            <div className="display flex flex-row">
            <img className=" h-10 w-10 mt-10 " src="../wind@1x-1.0s-200px-200px.svg" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Wind</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">
              {data.wind.speed} km/h
            </p>
          </div>
          <div>
          <div className="display flex flex-row">
          <img className=" h-8 w-8 mt-10 " src="../visibility.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">Visibility</p>
            </div>
            <p className="mx-10 text-gray-100 text-left">{data.visibility} m</p>
          </div>
          <div>
          <div className="display flex flex-row">
          <img className=" h-8 w-8 mt-10 " src="../wind-direction.png" alt=""/>
            <p className="mx-3 text-2xl text-gray-100 py-10 text-left">
              Wind direction
            </p>
            </div>
            <p className="mx-10 text-gray-100 text-left">{data.wind.deg}°</p>
          </div>
        </div>
      </div>
      <div className="left flex flex-col mt-10 pr-14 w-full h-full  justify-center items-baseline ">
        <img className=" h-full w-full " src="../Weather.png" alt="" />
      </div>
    </div>
  );
};

export default Body;
