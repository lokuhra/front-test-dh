import React, { Component } from "react";
import Router from "next/router";
import { parseHash } from "../src/auth/auth0";
import { saveToken, verifyToken } from "../src/auth";

export default class extends Component {
  componentDidMount() {
    parseHash((err, result) => {
      if (err) {
        console.error("Error signing in", err);
        return;
      }
      verifyToken(result.idToken).then(valid => {
        if (valid) {
          saveToken(result.idToken, result.accessToken);
          Router.push("/stagesList");
        } else {
          Router.push("/stagesList");
        }
      });
    });
  }
  render() {
    return null;
  }
}
