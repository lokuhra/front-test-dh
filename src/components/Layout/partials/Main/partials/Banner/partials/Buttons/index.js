import React from "react";
import { Box, Button } from "grommet/";
import { Grommet } from "grommet";
import { inject, observer } from "mobx-react";

const customButton = {
  global: {},
  button: {
    border: {
      color: "#F6F6F6"
    },
    primary: {
      color: "#F6F6F6"
    },
    extend: props => {
      let extraStyles = "";
      if (props.primary) {
        extraStyles = `
          text-transform: uppercase;
        `;
      }
      return `
        color: #EB6060;
        font-size: 12px;
        font-weight: bold;

        ${extraStyles}
      `;
    }
  }
};

const ButtonComponent = ({ label, margin, onClick, disabled }) => (
  <Box align="start" margin={margin}>
    <Grommet theme={customButton}>
      <Button
        fill={true}
        primary={true}
        label={label}
        onClick={onClick}
        disabled={disabled}
      />
    </Grommet>
  </Box>
);

const Buttons = ({dataRoutingStore}) => (
  <Box align="start" direction={"row"} margin={{ top: "small" }}>
    <ButtonComponent label={"Anterior"} margin={{ right: "xsmall" }} onClick={() =>dataRoutingStore.pressBackButton()}/>
    <ButtonComponent label={"Siguiente"} onClick={() =>dataRoutingStore.pressNextButton()}/>
  </Box>
);

export default inject("dataRoutingStore")(observer(Buttons));
