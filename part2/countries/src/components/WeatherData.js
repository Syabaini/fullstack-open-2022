import React, { useEffect, useState } from "react";
import axios from "axios";

const WeaterData = ({ city }) => {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
  console.log(API_KEY, "API Key tidak di temukan");
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetchWeather();
  });

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error, "<== Weater error");
    }
  };

  return (
    <div>
      {weather.main ? (
        <div>
          <h2>Weather in {city}</h2>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>Wind {weather.wind.speed} m/s</div>
        </div>
      ) : null}
    </div>
  );
};

export default WeaterData;
