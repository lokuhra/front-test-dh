import React, { Component } from "react";
import Layout from "../../Layout";
import { getTokenForBrowser, getTokenForServer } from "../../../auth";
import { inject, observer } from "mobx-react";
import Link from "next/link";

export default Page =>
  class SecureLayout extends Component {
    static async getInitialProps({ req }) {
      const loggedInUser = process.browser
        ? await getTokenForBrowser()
        : await getTokenForServer(req);
      const pageProperties =
        (await Page.getInitialProps) && (await Page.getInitialProps(req));

      return {
        ...pageProperties,
        loggedInUser,
        isLoggedIn: !!loggedInUser
      };
    }

    render() {
      if (!this.props.isLoggedIn) {
        return (
          <p>
            Debe Loguearse antes <a href="/">Login</a>
          </p>
        );
      }
      const LoginName = inject("uiCommonStore")(
        observer(props => {
          props.uiCommonStore.setLoginData(this.props.loggedInUser);
          return null;
        })
      );

      return (
        <Layout {...this.props} name={this.props.loggedInUser.nickname}>
          <LoginName />
          <Page {...this.props} />
        </Layout>
      );
    }
  };
