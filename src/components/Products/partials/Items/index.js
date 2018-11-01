import React, { Fragment } from "react";
import { Box, Image, Text } from "grommet";
import { inject, observer } from "mobx-react";

const CardData = ({ title, pref = "", data }) => (
  <Box flex={true} direction={"row"}>
    <Text weight={"bold"}>{title}</Text>
    <Text margin={{ left: "medium" }}>{`${pref}${data}`}</Text>
  </Box>
);

const Items = ({ dataRoutingStore }) =>
  dataRoutingStore.dataProductList && (
    <Box flex={true} direction={"row"} wrap={true} className={"justify-around"}>
      {dataRoutingStore.dataProductList.map(item => (
        <Box
          basis={"1/3"}
          pad={"small"}
          elevation={"small"}
          margin={"medium"}
          key={item._id}
        >
          <CardData title={"Nombre"} data={item.name} />
          <CardData title={"Precio"} data={item.price} pref={"$"} />
          <CardData title={"Margen"} data={item.margin} pref={"$"} />
          <CardData title={"Vendidos"} data={item.sold} />
          <CardData
            title={"Ingresos"}
            data={item.sold * item.price}
            pref={"$"}
          />
          <CardData
            title={"Ganancia"}
            data={item.sold * item.margin}
            pref={"$"}
          />
        </Box>
      ))}
    </Box>
  );

export default inject("dataRoutingStore")(observer(Items));
