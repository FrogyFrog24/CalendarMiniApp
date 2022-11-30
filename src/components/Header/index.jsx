import React from "react";
import ArrowButton from "../ArrowButton";
import s from "./style.module.css";

const Header = ({ title }) => {
  return (
    <header className={s.header}>
      <ArrowButton />
      <h1 className={s.header_title}>{title}</h1>
    </header>
  );
};

export default Header;
