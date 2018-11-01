import { observable, action } from "mobx";

export default class DataRouting {
  @observable
  component = null;

  @observable
  dataStageList = null;

  @observable
  dataSelectStage = null;

  @observable
  dataProductList = null;

  @observable
  stageIdSelect = null;

  @action
  setComponent(c) {
    this.component = c;
  }

  @action
  setDataStageList(d) {
    this.dataStageList = d;
  }
  @action
  setDataProductList(d) {
    this.dataProductList = d;
  }

  @action
  setDataSelectStage(d) {
    this.dataSelectStage = d;
  }

  @action
  setStageIdSelect(d) {
    this.stageIdSelect = d._id;
    alert(`Selecciono el ${d.name}`);
  }
}
