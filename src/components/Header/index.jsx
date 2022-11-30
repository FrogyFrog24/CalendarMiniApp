import React from "react";
import s from "./style.module.css";
import ArrowButton from "../ArrowButton";
import { useLocation } from "react-router";

const Header = ({ title }) => {
  const location = useLocation();
  return (
    <header className={s.header}>
      {location.pathname !== "/" ? <ArrowButton isMirrored /> : ""}
      <h1 className={s.header_title}>{title}</h1>
    </header>
  );
};

export default Header;
