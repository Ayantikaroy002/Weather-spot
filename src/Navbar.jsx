import React, { useState } from "react";
import { GEOAPI_BASE_URL, GEOAPI_KEY_NAME, GEOAPI_KEY_VALUE } from "../api.js";

const Navbar = ({ onOptionsUpdate }) => {
  const [Search, setSearch] = useState('');

  const searchPressed = async () => {
    try {
      const response = await fetch(`${GEOAPI_BASE_URL}?q=${Search}&${GEOAPI_KEY_NAME}=${GEOAPI_KEY_VALUE}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const options = data.map((city) => ({
        value: `${city.lat} ${city.lon}`,
        label: `${city.name}, ${city.state}`,
      }));
  
      onOptionsUpdate(options);
      setSearch('');
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className="bg-[#09335C] w-full max-w-full  pb-2">
      <div className="flex justify-center items-center h-16 px-4 w-full mt-10">
        <div className="flex w-full max-w-xl space-x-2">
          <input
            className="w-full text-center text-md rounded-md text-blue-800 hover:bg-gray-200 md:py-3 px-4"
            type="text"
            placeholder="Search for cities"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-900 font-medium rounded-xl text-sm py-2 px-6 "
            onClick={searchPressed}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
