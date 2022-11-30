import React from "react";
import ArrowButton from "../ArrowButton";
import s from "./style.module.css";
import cx from "classnames";

const EventCard = ({ title, date, path, status = "appointed" }) => {
  return (
    <div className={s.card_item}>
      <div className={cx(s.status, status)}></div>
      <div className={s.card_info}>
        <div className={cx(s.card_info__title, "p2__medium")}>{title}</div>
        <div className={cx(s.card_info__date, "p3__medium")}>{date}</div>
      </div>
      <ArrowButton style={s.card_action} path={path} />
    </div>
  );
};

export default EventCard;
