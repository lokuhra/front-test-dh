import React from "react";
import { Box, Button } from "grommet";
import { inject, observer } from "mobx-react";
import { Menu } from "grommet-icons";

const MenuComponent = ({ uiCommonStore }) => (
  <Box basis={"small"} align={"end"}>
    <Button onClick={() => uiCommonStore.toggleMenu()}>
      <Menu />
    </Button>
  </Box>
);

export default inject("uiCommonStore")(observer(MenuComponent));
