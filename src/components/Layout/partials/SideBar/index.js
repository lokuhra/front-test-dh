import React from "react";
import { Text, Box } from "grommet/";
import Items from "./partials/Items";
import { observer, inject } from "mobx-react";

const SideBar = ({ uiCommonStore }) =>
  uiCommonStore.isMenuOpen && (
    <Box
      gridArea="sidebar"
      background="light-1"
      elevation="small"
      width="small"
      animation={[
        { type: "fadeIn", duration: 300 },
        { type: "slideRight", size: "xlarge", duration: 150 }
      ]}
    >
      <Box pad={{ horizontal: "medium", vertical: "small" }}>
        <Text size={"small"} color="dark-6">Navegación</Text>
      </Box>
      <Items />
    </Box>
  );

export default inject("uiCommonStore")(observer(SideBar));
