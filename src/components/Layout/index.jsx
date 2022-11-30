import React from "react";
import { Outlet } from "react-router";

import BottomNavMenu from "../BottomNavMenu";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="theme-light ">
      <div className="wrapper">
        <Header title="События" />
        <Outlet />
      </div>
      <BottomNavMenu />
    </div>
  );
};

export default Layout;
