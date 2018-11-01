import { observable, action } from "mobx";

export default class Content {
  @observable
  content = {
    title: "Titulo",
    subTitle: "Subtitulo"
  };

  @action
  setContent(content) {
    this.content = {
      title: content.title,
      subTitle: content.subTitle
    };
  }
}
