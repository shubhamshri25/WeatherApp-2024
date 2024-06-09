# Weather Application

## Overview
This is a weather application built using React and the Open Weather API. It provides current weather information based on user input (city name or zip code) or their present location by clicking on the current location icon along with the weather forecast of upcoming days. The app also includes a dark mode and light mode toggle.

## Features
- Search weather by city name or zip code
- Display current weather information: location, temperature, date, time, humidity, wind speed, and weather description
- Dark mode and light mode toggle
- 3 Hours Step Forecast
- Daily Forecast

## Installation

1. Clone the repository: git clone https://github.com/yourusername/weather-app.git
cd weather-app
2. Install dependencies: npm i
3. Get your Open Weather API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to the API call in `weatherService.js`.
4. Run the application: npm run dev

## Known Issues
- Ensure to handle invalid city names or zip codes gracefully.
