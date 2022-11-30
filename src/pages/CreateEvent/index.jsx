import React from "react";
import EventCard from "../../components/EventCard";
import s from "./style.module.css";

const Events = () => {
  return (
    <div className={s.events_list}>
      {dataList.map((el, i) => {
        return (
          <EventCard
            id={el.id}
            date={el.date}
            title={el.title}
            status={el.status}
            key={`${el.date}_${el.id}`}
          />
        );
      })}
    </div>
  );
};

export default Events;
