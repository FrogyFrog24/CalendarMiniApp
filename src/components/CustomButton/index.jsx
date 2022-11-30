import React from "react";
import s from "./style.module.css";
import cx from "classnames";

const CustomButton = ({ children, style, type = "button", handleClick }) => {
  return (
    <button
      type={type}
      className={cx(s.custom_button, style)}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
