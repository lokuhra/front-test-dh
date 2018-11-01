import React from "react";
import { Box } from "grommet/";
import Title from "./partials/Title";
import Buttons from "./partials/Buttons";

const Banner = () => (
  <Box
    direction="column"
    justify="start"
    basis={"xsmall"}
    elevation="xsmall"
    alignSelf={"stretch"}
    pad={{ horizontal: "medium", vertical: "small" }}
    background="status-error"
  >
    <Box justify="between" align="start" direction={"row"} basis={"full"}>
      <Title />
      <Buttons />
    </Box>
  </Box>
);

export default Banner;
