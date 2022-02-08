import React from "react";
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { MdDeviceThermostat, MdNorthEast } from "react-icons/md";

import moment from "moment";

// const image = require(".../images/logo.png");

const TodaysWeather = ({ weather }) => {
  const tempDegrees = Math.round(weather.main.temp - 273.15);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading as="h2" style={{ fontSize: 40 }}>
        {weather.name}
      </Heading>
      <Text style={{ marginBottom: 5 }} size="md">
        {moment().format("MMMM Do YYYY, h:mm a")}
      </Text>
      {console.log(weather)}
      <Box style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            background: `url(http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png)`,
            backgroundSize: "cover",
            width: 60,
            height: 60,
          }}
        ></div>
        <Box style={{}}>
          <Text style={{ marginBottom: 5 }} size="lg">
            {capitalize(weather.weather[0].description)}
          </Text>
          <Box style={{ display: "flex" }}>
            <Text style={{ marginRight: 5 }}>
              <Icon as={MdDeviceThermostat} />
              {tempDegrees}º
            </Text>
            <Text>
              <Icon as={MdNorthEast} />
              {weather.wind.speed}mph
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TodaysWeather;
