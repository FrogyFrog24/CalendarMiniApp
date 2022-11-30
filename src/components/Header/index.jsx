import React from "react";
import s from "./style.module.css";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className={s.header_title}>{title}</h1>
    </header>
  );
};

export default Header;
