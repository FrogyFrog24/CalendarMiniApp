import React from "react";
import EventCard from "../../components/EventCard";
import s from "./style.module.css";

const Events = () => {
  return (
    <div className={s.events_list}>
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="inprogress"
      />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        status="inprogress"
        date="21.10.22-30.10.22"
      />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="inprogress"
      />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        status="inprogress"
        date="21.10.22-30.10.22"
      />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="inprogress"
      />
      <EventCard
        title="Встреча с NN"
        date="21.10.22-30.10.22"
        status="finished"
      />
      <EventCard title="Встреча с NN" date="21.10.22-30.10.22" />
      <EventCard
        title="Встреча с NN"
        status="inprogress"
        date="21.10.22-30.10.22"
      />
    </div>
  );
};

export default Events;
