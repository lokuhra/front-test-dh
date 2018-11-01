import React from "react";
import PrivateView from "../src/components/SecureNavigation/PrivateView";
import { inject, observer } from "mobx-react";
import { stages } from "../src/constants/content";

const LoadContent = inject("contentStore", "dataRoutingStore")(
  observer(props => {
    props.contentStore.setContent(stages);
    props.dataRoutingStore.setComponent("Stages");
    return null;
  })
);

const StagesPage = () => (
  <div>
    <LoadContent />
  </div>
);

export default PrivateView(StagesPage);
