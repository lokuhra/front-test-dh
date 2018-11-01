import React from "react";
import Helmet from "./partials/Helmet";
import MobxProvider from "./partials/MobxProvider";
import Theme from "./partials/Theme";
import GridComponent from "./partials/GridComponent";
import BannerScreen from "./partials/Main";
import SideBar from "./partials/SideBar";
import AppBar from "./partials/AppBar";

const Layout = ({ title, children }) => (
  <MobxProvider>
    <div className={"h-screen bg-grey"}>
      <Theme>
        <GridComponent>
          <AppBar />
          <BannerScreen />
          <SideBar />
          <Helmet title={title} />
          {children}
        </GridComponent>
      </Theme>
    </div>
  </MobxProvider>
);

export default Layout;
