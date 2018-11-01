import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { apiUrl } from "../../utils/apiUrl";
import axios from "axios";
import { Box, Heading } from "grommet";
import Items from "./partials/Items";

const StagesList = inject("dataRoutingStore")(
  observer(
    class Stages extends Component {
      componentDidMount() {
        axios
          .get(apiUrl + "/stages")
          .then(response => {
            this.props.dataRoutingStore.setDataStageList(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
      render() {
        return (
          <Fragment>
            <Box>
              <Heading size={"small"} color="dark-2">
                Escenarios Disponibles:
              </Heading>
            </Box>

            <Box direction={"column"}>
              <Items />
            </Box>
          </Fragment>
        );
      }
    }
  )
);

export default StagesList;
