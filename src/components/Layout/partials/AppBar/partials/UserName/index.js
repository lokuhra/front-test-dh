import React from "react";
import { Box, Text } from "grommet/";

import { inject, observer } from "mobx-react";

const UserName = ({ uiCommonStore }) => (
  <Box basis={"small"} align={"start"} direction={"row"}>
    <Box align={"start"}>
      <Text alignSelf={"center"} size={"small"}>
        Bienvenido
      </Text>
      <Text alignSelf={"center"} size={"small"}>
        {uiCommonStore.loginData.name}
      </Text>
    </Box>

  </Box>
);

export default inject("uiCommonStore")(observer(UserName));
