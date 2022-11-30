import React from "react";
import { Outlet } from "react-router";

import BottomNavMenu from "../BottomNavMenu";
import Header from "../Header";

const Layout = () => {
  return (
    <div>
      <div className="wrapper">
        <Header title="События" />
        <Outlet />
      </div>
      <BottomNavMenu />
      <div className="bg-color--light"></div>
    </div>
  );
};

export default Layout;
