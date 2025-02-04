import { useState } from "react";
import './App.css';
import Body from './Body';
import Navbar from './Navbar.jsx';
import { WeaAPI_BASE_URL, GEOAPI_KEY_VALUE } from "../api.js";
import Forecast from "./Forercast.jsx";
import Temp from "./Temp.jsx";
import Before from "./Before.jsx";
import Toggle from "./Toggle.jsx";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const [options, setOptions] = useState([]);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const handleToggle = (toggleState) => {
    setIsFahrenheit(toggleState);
  
    if (currentWeather) {
      const { coord } = currentWeather;
      fetchWeather(coord.lat, coord.lon, toggleState);
    } else if (options.length > 0) {
      handleOptionsUpdate(options, toggleState);
    }
  };
  

  const handleOptionsUpdate = async (newOptions, toggleState = isFahrenheit) => {
    setOptions(newOptions);
    
    for (const option of newOptions) {
      const [latitude, longitude] = option.value.split(" ");
      fetchWeather(latitude, longitude, toggleState);
    }
  };

  const fetchWeather = async (latitude, longitude, toggleState = isFahrenheit) => {
    const unit = toggleState ? "imperial" : "metric"; // Fahrenheit or Celsius

    try {
      const currWeatherResponse = await fetch(`${WeaAPI_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${GEOAPI_KEY_VALUE}&units=${unit}`);
      const currForecastResponse = await fetch(`${WeaAPI_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${GEOAPI_KEY_VALUE}&units=${unit}`);

      if (!currWeatherResponse.ok || !currForecastResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const currWeatherData = await currWeatherResponse.json();
      const currForecastData = await currForecastResponse.json();

      setCurrentWeather(currWeatherData);
      setCurrentForecast(currForecastData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Location access denied. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar onOptionsUpdate={handleOptionsUpdate} />
      {currentWeather ? (
        <div className="bg-[#09335C]">
          <div className="place-items-end lg:pr-28 pr-10 md:pr-16">
            <Toggle onToggle={handleToggle} />
          </div>
          <div className="display flex flex-col lg:flex-row bg-[#09335C]">
            <Temp onGetLocation={handleGetLocation} />
            {currentWeather && <Body data={currentWeather} isFahrenheit={isFahrenheit} />}
            {currentForecast && <Forecast data={currentForecast} isFahrenheit={isFahrenheit} />}
          </div>
        </div>
      ) : (
        <Before />
      )}
    </div>
  );
}

export default App;



