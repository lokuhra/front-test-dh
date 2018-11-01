import React from "react";
import { Box } from "grommet/";
import Banner from "./partials/Banner";
import BoxContent from "./partials/BoxContent";

const BannerScreen = () => (
  <Box gridArea="main" justify="between" align="start" background={"light-4"}>
    <Banner />
    <BoxContent />
  </Box>
);

export default BannerScreen;
