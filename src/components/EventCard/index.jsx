import React from "react";
import CustomButton from "../CustomButton";
import Arrow from "../ArrowIcon";
import s from "./style.module.css";
import cx from "classnames";
import { useNavigate } from "react-router";

const EventCard = ({ title, date, path, status = "appointed" }) => {
  const navigate = useNavigate();
  const hadleClick = (e) => {
    e.prevetDefault();
    navigate(path);
  };
  return (
    <div className={s.card_item}>
      <div className={cx(s.status, status)}></div>
      <div className={s.card_info}>
        <div className={cx(s.card_info__title, "p2__medium")}>{title}</div>
        <div className={cx(s.card_info__date, "p3__medium")}>{date}</div>
      </div>
      <CustomButton style={s.card_action} onClick={hadleClick}>
        <Arrow />
      </CustomButton>
    </div>
  );
};

export default EventCard;
