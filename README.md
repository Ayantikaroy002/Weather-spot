# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm run start
Runs the app in the development mode.
Open http://localhost:5173 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Approach, Challenges, and Solutions Implemented in this website
1. Approach Taken

The weather app was designed to allow users to:
a)Search for a city and display its weather forecast.
b)Use their current location to fetch weather details.
c)Toggle between Celsius and Fahrenheit without losing their selected location.

The app uses:
a)State management (useState) to handle weather data, forecast, options, and unit selection.
b)Geolocation API to fetch the user's current location.
c)API calls (fetch) to get weather data dynamically.

2. Challenges Faced & Solutions Implemented

Challenge 1: Handling User vs. Searched Location Data
Issue:

When a user searched for a city, the app correctly displayed weather details.
However, if they later toggled the unit (Celsius ↔ Fahrenheit), the weather switched to the last searched location, even if the user originally used their current location.
Root Cause:

The handleToggle function was using options, which stores the last searched location.
If the user’s current location was used before searching, it was not stored in options, so toggling reverted to the last searched city.
Solution Implemented:

Modify handleToggle to prioritize currentWeather's coordinates over options when fetching weather data.

Challenge 2: Handling Asynchronous API Calls

Fetching data from multiple APIs (weather, forecast, geolocation) introduced race conditions and potential delays.
Solution:
Used async/await to ensure sequential API calls.
Implemented proper error handling (try-catch) to manage API failures.

Challenge 3: Managing State Efficiently

Handling multiple state variables (currentWeather, currentForecast, options, isFahrenheit).
Ensuring proper updates without unnecessary re-renders.
Solution:
Used useState effectively to manage different pieces of data separately.
Avoided unnecessary re-fetching by checking existing state before making API calls.

Challenge 4: Handling Unit Toggle Without Resetting User Location

When toggling between Fahrenheit and Celsius, the app was fetching weather for the last searched city instead of the user's location.
Solution:
Modified handleToggle to prioritize currentWeather coordinates over search results.
Ensured that if the user’s location is active, it doesn’t switch back to a searched city when toggling units.