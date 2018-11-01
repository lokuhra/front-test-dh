import React, { Component} from "react";
import { inject, observer } from "mobx-react";
import { apiUrl } from "../../utils/apiUrl";
import axios from "axios";
import { Box } from "grommet";
import Items from "./partials/Items";

const Stage = inject("dataRoutingStore")(
  observer(
    class Stages extends Component {
      componentDidMount() {
        axios
          .get(
            `${apiUrl}/stages/search/id/${
              this.props.dataRoutingStore.stageIdSelect
            }`
          )
          .then(response => {
            this.props.dataRoutingStore.setDataSelectStage(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
      render() {
        return (
          <Box direction={"column"} pad={"small"}>
            <Items />
          </Box>
        );
      }
    }
  )
);

export default Stage;
