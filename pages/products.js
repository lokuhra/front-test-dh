import React from "react";
import PrivateView from "../src/components/SecureNavigation/PrivateView";
import { inject, observer } from "mobx-react";
import { products } from "../src/constants/content";

const LoadContent = inject("contentStore", "dataRoutingStore")(
  observer(props => {
    props.contentStore.setContent(products);
    props.dataRoutingStore.setComponent("Products");
    return null;
  })
);

const ProductsPage = () => (
  <div>
    <LoadContent />
  </div>
);

export default PrivateView(ProductsPage);
