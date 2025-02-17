import React from 'react';
import { FaList, FaMap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Temp = ({ onGetLocation }) => {
  return (
    <>
      <div className="hidden lg:flex flex-col w-24 ml-14 mt-11 mb-11 rounded-3xl bg-[#153e67]">
        <div className="grid grid-rows-5">
          <div className="text-gray-100 text-left">
            <img className="h-10 w-10 mt-10 ml-7" src="../sunny.png" alt=""/>
            <h1 className='ml-6 pt-2 text-xs'>Weather</h1>
          </div>
          <div className="text-gray-100 text-left">
            <div className='mt-10 ml-7 text-3xl'>
              <FaList />
            </div>
            <h1 className='ml-7 pt-2 text-xs'>Cities</h1>
          </div>
          <div className="text-gray-100 text-left">
            <div className='mt-10 ml-7 text-3xl'>
              <FaMap />
            </div>
            <h1 className='ml-8 pt-2 text-xs'>Map</h1>
          </div>
          <div className="text-gray-100 flex flex-col items-center cursor-pointer mt-10" onClick={onGetLocation}>
            <FaLocationDot className="text-3xl" />
            <h1 className="pt-2 text-center text-xs">Your Location</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
