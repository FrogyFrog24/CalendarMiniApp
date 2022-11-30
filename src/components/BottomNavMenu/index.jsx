import React from "react";

import cx from "classnames";
import s from "./style.module.css";

import EventsIcon from "../../components/EventsIcon";
import ProfileIcon from "../../components/ProfileIcon";
import CalendarIcon from "../../components/CalendarIcon";
import CustomButton from "../CustomButton";
import { useLocation, useNavigate } from "react-router";

const BottomNavMenu = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={s.nav_list}>
      <CustomButton
        style={cx(s.nav_item, location.pathname === "/" ? s.active : "")}
        handleClick={() => navigate("/")}>
        <EventsIcon />
        <span className={cx("c1__semibold", s.nav_item__text)}>События</span>
      </CustomButton>

      <CustomButton
        style={cx(
          s.nav_item,
          location.pathname === "/calendar" ? s.active : ""
        )}
        handleClick={() => navigate("/calendar")}>
        <CalendarIcon />
        <span className={cx("c1__semibold", s.nav_item__text)}>Календарь</span>
      </CustomButton>

      <CustomButton
        style={cx(s.nav_item, location.pathname === "/profile" ? s.active : "")}
        handleClick={() => navigate("/profile")}>
        <ProfileIcon />
        <span className={cx("c1__semibold", s.nav_item__text)}>Профиль</span>
      </CustomButton>
    </nav>
  );
};

export default BottomNavMenu;
