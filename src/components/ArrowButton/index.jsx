import React from "react";

import s from "./style.module.css";
import cx from "classnames";

import Arrow from "../ArrowIcon";

import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const ArrowButton = ({ style }) => {
  const location = useLocation();
  if (location.pathname !== "/") {
    return (
      <Link to={-1} className={cx(s.arrow_button, style)}>
        <Arrow />
      </Link>
    );
  } else {
    return <></>;
  }
};

export default ArrowButton;
