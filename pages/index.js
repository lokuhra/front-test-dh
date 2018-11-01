import React, { Component } from "react";
import { login } from "../src/auth/auth0";
import { getTokenForBrowser, getTokenForServer } from "../src/auth";
import Router from "next/dist/lib/router";

class Index extends Component {
  static async getInitialProps({ req }) {
    const loggedInUser = process.browser
      ? await getTokenForBrowser()
      : await getTokenForServer(req);
    return {
      isLoggedIn: !!loggedInUser
    };
  }
  componentDidMount() {
    !this.props.isLoggedIn && login();
    this.props.isLoggedIn && Router.push("/stagesList");
  }
  render() {
    return null;
  }
}

export default Index;
