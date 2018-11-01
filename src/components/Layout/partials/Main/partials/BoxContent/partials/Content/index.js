import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import StagesList from "../../../../../../../StagesList";
import Stage from "../../../../../../../Stage";
import Products from "../../../../../../../Products";
import Admin from "../../../../../../../Admin";

const Content = inject("dataRoutingStore")(
  observer(
    class Stages extends Component {
      render() {
        return (
          <Fragment>
            {(() => {
              switch (this.props.dataRoutingStore.component) {
                case "Products":
                  return <Products />;
                case "StageList":
                  return <StagesList />;
                case "Stages":
                  return <Stage />;
                case "Admin":
                  return <Admin />;
                default:
                  return null;
              }
            })()}
          </Fragment>
        );
      }
    }
  )
);

export default Content;
