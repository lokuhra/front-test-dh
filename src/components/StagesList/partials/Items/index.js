import React from "react";
import { Box, Button, Text } from "grommet";
import { inject, observer } from "mobx-react";

const Items = ({ dataRoutingStore }) =>
  dataRoutingStore.dataStageList &&
  dataRoutingStore.dataStageList.map(item => (
    <Button
      key={item._id}
      hoverIndicator
      onClick={() => dataRoutingStore.setStageIdSelect(item)}
    >
      <Box pad={{ horizontal: "medium", vertical: "small" }}>
        <Text color="dark-1">{item.name}</Text>
      </Box>
    </Button>
  ));

export default inject("dataRoutingStore")(observer(Items));
