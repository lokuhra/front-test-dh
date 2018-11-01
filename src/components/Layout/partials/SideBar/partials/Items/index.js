import React, { Fragment } from "react";
import { Box, Button, Text } from "grommet";
import routes from "../../../../../../constants/routes";
import Link from "next/link";

const ButtonStageList = () => (
  <Link prefetch href={"/stagesList"}>
    <Button hoverIndicator>
      <Box pad={{ horizontal: "medium", vertical: "small" }}>
        <Text color="dark-1">{"Lista de Escenarios"}</Text>
      </Box>
    </Button>
  </Link>
);

const ButtonMap = () =>
  routes.map((item, i) => (
    <Link key={i} prefetch href={item.path}>
      <Button hoverIndicator>
        <Box pad={{ horizontal: "medium", vertical: "small" }}>
          <Text color="dark-1">{item.name}</Text>
        </Box>
      </Button>
    </Link>
  ));

const Items = () => (
  <Fragment>
    <ButtonStageList />
    <ButtonMap />
  </Fragment>
);

export default Items;
