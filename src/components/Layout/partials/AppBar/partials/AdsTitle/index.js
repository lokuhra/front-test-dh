import React from "react";
import { Box, Image, Text } from "grommet";

const AdsTitle = () => (
  <Box
    basis={"full"}
    align={"start"}
    direction={"row"}
    margin={{ left: "medium" }}
  >
    <Box basis={"auto"} align={"start"}>
      <Image src="/static/img/logo_ads_small.png" fit={"contain"} />
    </Box>
    <Box basis={"auto"} align={"start"} direction={"row"}>
      <Text margin={{ top: "xsmall" }}>Simulador de campañas</Text>
      <Text margin={{ top: "xsmall", left: "xsmall" }} weight={"bold"}>
        Google Ads
      </Text>
    </Box>
  </Box>
);

export default AdsTitle;
