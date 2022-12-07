import React from "react";
import { Box } from "@chakra-ui/react";

import TodaysWeather from "./TodaysWeather.jsx";
import WeatherForecast from "./WeatherForecast.jsx";

const WeatherReport = ({ weather, forecast }) => {
  return (
    <Box style={{ margin: 10 }}>
      {weather ? <TodaysWeather weather={weather} /> : null}
      {forecast ? <WeatherForecast forecast={forecast} /> : null}
    </Box>
  );
};

export default WeatherReport;
