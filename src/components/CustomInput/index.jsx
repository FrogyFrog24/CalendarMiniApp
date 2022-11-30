import React from "react";
import s from "./style.module.css";
import cx from "classnames";

const CustomInput = ({ id, name, value, placeholder, type = "text" }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={cx(s.custom_input, "p2_medium")}
    />
  );
};

export default CustomInput;
