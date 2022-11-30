import React from "react";

import cx from "classnames";
import s from "./style.module.css";

import PlusIcon from "../../components/PlusIcon";

const BottomNavMenu = ({ title }) => {
  return (
    <button className={cx(s.create_button)}>
      <PlusIcon />
    </button>
  );
};

export default BottomNavMenu;
