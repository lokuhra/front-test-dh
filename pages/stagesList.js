import React from "react";
import PrivateView from "../src/components/SecureNavigation/PrivateView";
import { inject, observer } from "mobx-react";
import { stageList } from "../src/constants/content";


const LoadContent = inject("contentStore", "dataRoutingStore")(
  observer(props => {
    props.contentStore.setContent(stageList);
    props.dataRoutingStore.setComponent("StageList");
    return null;
  })
);

const StagesPage = () => (
  <div>
    <LoadContent />
  </div>
);

export default PrivateView(StagesPage);
