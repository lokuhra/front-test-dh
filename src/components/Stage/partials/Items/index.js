import React, { Fragment } from "react";
import { Heading, Text } from "grommet";
import { inject, observer } from "mobx-react";

const Items = ({ dataRoutingStore }) =>
  dataRoutingStore.dataSelectStage ? (
    <Fragment>
      <Heading level={3}>{dataRoutingStore.dataSelectStage.name}</Heading>
      <Text color="accent-1">
        {dataRoutingStore.dataSelectStage.introduction}
      </Text>
      <Text margin={{ top: "large" }} color="dark-2">
        {dataRoutingStore.dataSelectStage.brief}
      </Text>
    </Fragment>
  ) : (
    <Text color="dark-2">{"Seleccione un Escenario antes"}</Text>
  );

export default inject("dataRoutingStore")(observer(Items));
