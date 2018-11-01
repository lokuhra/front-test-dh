import React from "react";
import { Box, Text } from "grommet/";
import { inject, observer } from "mobx-react";

const Title = ({ contentStore }) => (
  <Box justify="between" align="start">
    <Text>{contentStore.content.title}</Text>
    <Text size={"small"}>{contentStore.content.subTitle}</Text>
  </Box>
);

export default inject("contentStore")(observer(Title));
