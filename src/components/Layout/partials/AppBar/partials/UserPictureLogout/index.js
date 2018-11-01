import React from "react";
import { Box, Image, Menu as MenuComponent } from "grommet/";
import Router from "next/dist/lib/router";
import { inject, observer } from "mobx-react";

const UserPictureLogout = ({ uiCommonStore }) => (
  <Box basis={"small"} align={"start"}>
    <MenuComponent
      size={"small"}
      items={[{ label: "Desloguearse", onClick: () => Router.push("/logout") }]}
    >
      <Image
        src={uiCommonStore.loginData.picture}
        fit={"contain"}
        className={"picture-profile"}
      />
    </MenuComponent>
  </Box>
);

export default inject("uiCommonStore")(observer(UserPictureLogout));
