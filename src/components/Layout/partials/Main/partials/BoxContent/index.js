import React from "react";
import { Box } from "grommet";
import Content from "./partials/Content";

const BoxContent = () => (
  <Box justify="center" align="center" basis={"full"} alignSelf={"stretch"}>
    <Box
      background={"light-1"}
      size={"large"}
      basis={"full"}
      alignSelf={"stretch"}
      margin={{ horizontal: "medium", top:"medium" }}
    >
      <Content />
    </Box>
  </Box>
);

export default BoxContent;
