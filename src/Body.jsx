import React from "react";

const Body = ({ data }) => {
  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="slider w-full lg:max-w-screen-sm flex flex-col my-5 lg:my-11 lg:mx-5">
      <div className="flex flex-row mx-5 md:mx-10 lg:mx-0 bg-[#153e67] pb-5 lg:pb-11 rounded-3xl">
        <div className="left flex flex-col justify-center w-full">
          <h1 className="lg:text-7xl md:text-7xl text-xl mx-4  pt-5 lg:pt-10 text-gray-100 px-6 font-semibold">
            {data.name}
          </h1>
          <p className="text-gray-100 lg:text-xl md:text-xl text-sm pl-10 pt-2 lg:pt-5 md:pt-2">
            {data.weather[0].description}, Feels like {data.main.feels_like}°C
          </p>
          <p className="lg:text-5xl text-xl mx-4  text-gray-100 pl-6 pt-2 lg:pt-14  text-left">
            {data.main.temp} °C
          </p>
        </div>
        <div className="right flex flex-row  w-2/3 ml-5 lg:ml-10">
          <img
            className=" lg:h-full h-32 py-1"
            src={iconUrl}
            alt="Weather icon"
            id={`icon-${iconCode}`}
          />
        </div>
      </div>

      <div className="left flex flex-col mx-5 md:mx-10 lg:mx-0 justify-center pt-5 pb-4 md:pr-36 mt-6 items-baseline rounded-3xl bg-[#153e67]">
        <h1 className="text-2xl md:text-5xl lg:mx-10 mx-5 md:py-4 text-gray-100 px-6 font-semibold">
          Today
        </h1>
        <div className="grid grid-cols-2 md:w-full content-center md:relative md:gap-4">
          <div className=" hidden absolute inset-0 md:flex items-center justify-center pointer-events-none pl-16">
            <div className="absolute w-4/5 h-px bg-gray-300"></div>
            <div className="absolute h-4/5 w-px bg-gray-300"></div>
          </div>

          <div className="p-6 flex flex-col items-center w-full pl-9 md:pl-20">
            <img className="h-10 w-10" src="../thermometer.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 py-2">Max</p>
            <p className="lg:text-2xl text-gray-100">{data.main.temp_max} °C</p>
          </div>

          <div className="p-6 flex flex-col items-center w-full pl-14 md:pl-16">
            <img className="h-10 w-10" src="../thermometer.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 py-2">Min</p>
            <p className="lg:text-2xl text-gray-100">{data.main.temp_min} °C</p>
          </div>

          <div className="p-6 flex flex-col items-center w-full pl-9 md:pl-20">
            <img className="h-10 w-10" src="../sunrise.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 ">Sunrise</p>
            <p className="lg:text-2xl text-gray-100">
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>

          <div className="p-6 flex flex-col items-center w-full pl-14 md:pl-16">
            <img className="h-10 w-10" src="../sunset.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 ">Sunset</p>
            <p className="lg:text-2xl text-gray-100">
              {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>

      <div className="left flex flex-col mx-5 md:mx-10 lg:mx-0 justify-center pt-5 pb-4 md:pr-36 mt-6 items-baseline rounded-3xl bg-[#153e67]">
        <h1 className="text-2xl md:text-5xl lg:mx-10 mx-5 md:py-4 text-gray-100 px-6 font-semibold">
          Air Conditions
        </h1>
        <div className="grid grid-cols-2 md:w-full content-center md:relative md:gap-4">
          <div className="hidden absolute inset-0 md:flex items-center justify-center pointer-events-none pl-16">
            <div className="absolute w-4/5 h-px  bg-gray-300"></div>
            <div className="absolute h-4/5 w-px bg-gray-300"></div>
          </div>

          <div className="p-6 flex flex-col items-center w-full pl-4 md:pl-20 md:pt-10">
            <img className="h-10 w-10" src="../gauge.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 py-2">Pressure</p>
            <p className="lg:text-2xl text-gray-100">{data.main.pressure} hPa</p>
          </div>

          <div className="p-6 flex flex-col items-center w-full pt-8 pr-20 md:pr-5 md:pl-20 md:pt-12">
            <img className="h-10 w-10" src="../wind@1x-1.0s-200px-200px.svg" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 ">Wind</p>
            <p className="lg:text-2xl text-gray-100">{data.wind.speed} km/h</p>
          </div>

          <div className="p-1 flex flex-col items-center w-full md:pl-16 ">
            <img className="h-10 w-10 mt-4" src="../visibility.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 py-2">Visibility</p>
            <p className="lg:text-2xl text-gray-100">{data.visibility} m</p>
          </div>

          <div className="p-5 flex flex-col items-center w-full md:pr-1 pr-20 md:pl-16">
            <img className="h-10 w-10 " src="../wind-direction.png" alt="" />
            <p className="text-md lg:text-2xl text-gray-100 md:py-2 text-center">Wind direction</p>
            <p className="lg:text-2xl text-gray-100">{data.wind.deg}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
