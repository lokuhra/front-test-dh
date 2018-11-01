import React from "react";
import PrivateView from "../src/components/SecureNavigation/PrivateView";
import { inject, observer } from "mobx-react";
import { admin } from "../src/constants/content";

const LoadContent = inject("contentStore", "dataRoutingStore")(
  observer(props => {
    props.contentStore.setContent(admin);
    props.dataRoutingStore.setComponent("Admin");
    return null;
  })
);

const AdminPage = () => (
  <div>
    <LoadContent />
  </div>
);

export default PrivateView(AdminPage);
