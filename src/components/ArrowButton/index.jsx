import React from "react";

import s from "./style.module.css";
import cx from "classnames";

import Arrow from "../ArrowIcon";

import { Link } from "react-router-dom";

const ArrowButton = ({ path = -1, style, isMirrored = false }) => {
  return (
    <Link to={path} className={cx(s.arrow_button, style)}>
      <Arrow
        style={{ transform: !isMirrored ? "rotate(0deg)" : "rotate(180deg)" }}
      />
    </Link>
  );
};

export default ArrowButton;
