import { observable, action } from "mobx";

export default class UiCommon {
  @observable
  isMenuOpen = false;

  @observable
  loginData = {
    name: "",
    picture: ""
  };

  @action
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
  @action
  setLoginData(data) {
    this.loginData = {
      name: data.name,
      picture: data.picture
    };
  }
}
