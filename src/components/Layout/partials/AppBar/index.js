import React from "react";
import { Box } from "grommet";
import LogoDH from "./partials/LogoDH";
import AdsTitle from "./partials/AdsTitle";
import UserName from "./partials/UserName";
import UserPictureLogout from "./partials/UserPictureLogout";
import MenuComponent from "./partials/Menu";

const AppBar = () => (
  <Box
    gridArea="header"
    direction="row"
    align="center"
    justify="between"
    height="xxsmall"
    elevation="xsmall"
    pad={{ horizontal: "medium", vertical: "small" }}
    background="light-1"
  >
    <LogoDH />
    <AdsTitle />
    <UserName />
    <UserPictureLogout />
    <MenuComponent />
  </Box>
);

export default AppBar
