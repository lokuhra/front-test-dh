import React from "react";
import { Provider } from "mobx-react";
import stores from "../../../../store";

const ProviderApolloMobx = ({ children }) => (
  <Provider {...stores}>{children}</Provider>
);
export default ProviderApolloMobx;
