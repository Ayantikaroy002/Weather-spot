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
      

   
        const options = data.map((city) => {
          return {
            value: `${city.lat} ${city.lon}`,
            label: `${city.name}, ${city.state}`,
          };
        });

        onOptionsUpdate(options);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex justify-center bg-fixed bg-[#141415] h-16">
      <div className="flex mt-5 bg-[#141415]">
        <input
          className="text-center pl-32 pr-32 border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          type="text"
          placeholder="Search for cities"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2 px-6 ml-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          onClick={searchPressed}
        >
          Search
        </button>
       
      </div>
    </div>
  );
};

export default Navbar;
