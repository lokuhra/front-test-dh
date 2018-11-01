import React, { Component } from "react";
import { logout } from "../src/auth/auth0";
import { deleteToken } from "../src/auth";
import Router from "next/router";

export default class extends Component {
  componentDidMount() {
    deleteToken();
    logout();
    Router.push("/");
  }
  render() {
    return null;
  }
}
