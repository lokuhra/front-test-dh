import UiCommon from "./uiCommon";
import Content from "./content";
import DataRouting from "./dataRouting";

const uiCommonStore = new UiCommon();
const contentStore = new Content();
const dataRoutingStore = new DataRouting();

const stores = {
  uiCommonStore,
  contentStore,
  dataRoutingStore
};

export default stores;
