import React, { useEffect, useState, useCallback } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

import CitySearch from "./CitySearch.jsx";
import WeatherReport from "./WeatherReport.jsx";

export function App() {
  const [city, setCity] = useState("London");
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);
  const apiKey = "a7ee829ef8a8961d6a038129089cb731";

  //on load fetch city from local storage
  useEffect(() => {
    chrome.storage.local.get("city", (res) => {
      if (res?.city) {
        setCity(res.city);
        getWeather(res.city);
      }
    });
  }, []);

  // function to get weather for current city
  const getWeather = useCallback(
    (city) => {
      // update the city in local storage
      chrome.storage.local.set({ city: city });
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setForecast(res);
        });

      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setWeather(res);
        });
    },
    [city]
  );

  return (
    <ChakraProvider>
      <Box style={{ margin: 2 }}>
        <CitySearch setCity={setCity} getWeather={getWeather} city={city} />
        <WeatherReport weather={weather} forecast={forecast} />
      </Box>
    </ChakraProvider>
  );
}
