import { useState} from "react";
import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import { WeaAPI_BASE_URL, GEOAPI_KEY_VALUE } from "../api.js";
import Forercast from "./Forercast.jsx";
import Temp from "./Temp.jsx";
import Before from "./Before.jsx";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [currentForcast, setcurrentForcast] = useState(null);
  const [options, setOptions] = useState([]);

  const handleOptionsUpdate = async (newOptions) => {
    setOptions(newOptions);
    

    for (const option of newOptions) {
      const [latitude, longitude] = option.value.split(" ");
      

      try {
        const currWeatherResponse = await fetch(`${WeaAPI_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${GEOAPI_KEY_VALUE}&units=metric`);
        const currForecastResponse = await fetch(`${WeaAPI_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${GEOAPI_KEY_VALUE}&units=metric`);

        if (!currWeatherResponse.ok || !currForecastResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const currWeatherData = await currWeatherResponse.json();
        const currForecastData = await currForecastResponse.json();
       
        setcurrentWeather(currWeatherData);
        setcurrentForcast(currForecastData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

 

  return (
    <>
      <Navbar onOptionsUpdate={handleOptionsUpdate} />
      
      <div className="display flex flex-row bg-[#141415] ">
        {currentWeather ? (
          <>
            {currentWeather && <Temp data={currentWeather} />}
            {currentWeather && <Body data={currentWeather} />}
            {currentForcast && <Forercast data={currentForcast} />}
          </>
        ) : (
          <Before />
        )}
      </div>
    </>
  );
}

export default App;
