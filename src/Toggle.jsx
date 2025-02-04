import React, { useState } from "react";

const Toggle = ({ onToggle }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const handleChange = () => {
    setIsFahrenheit((prev) => !prev);
    onToggle(!isFahrenheit);
  };

  return (
    <div className="flex flex-row md:pt-4 md:gap-4 gap-2">
      <h1 className="text-white lg:text-lg md:text-sm md:pt-1 lg:pt-0 text-xs font-bold">Change Unit</h1>
      <label className="flex items-center relative w-max cursor-pointer select-none">
        <input
          type="checkbox"
          className="appearance-none transition-colors cursor-pointer w-8 h-4 md:w-14 md:h-7 rounded-full 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black 
          focus:ring-blue-500 bg-red-500 checked:bg-green-500 peer"
          checked={isFahrenheit}
          onChange={handleChange}
        />
        <div className="absolute flex w-full h-full items-center justify-between px-1 md:px-2 text-[10px] md:text-xs font-bold text-white">
          <span>°F</span>
          <span>°C</span>
        </div>
        <span className="w-4 h-4 md:w-7 md:h-7 left-0 absolute rounded-full transform transition-transform 
        bg-gray-200 peer-checked:translate-x-4 md:peer-checked:translate-x-7" />
      </label>
    </div>
  );
};

export default Toggle;
