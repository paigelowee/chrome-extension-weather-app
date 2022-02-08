import React from "react";
import { Input, Box, InputRightElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const CitySearch = ({ setCity, getWeather, city }) => {
  return (
    <Box style={{ marginBottom: 10, marginTop: 10 }}>
      <InputGroup style={{ marginLeft: 10, marginRight: 10, width: "auto" }}>
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City name..."
        />
        <InputRightElement
          children={<SearchIcon color="grey" />}
          onClick={() => getWeather()}
          style={{ cursor: "pointer" }}
        />
      </InputGroup>
    </Box>
  );
};

export default CitySearch;
