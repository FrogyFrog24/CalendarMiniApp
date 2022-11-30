import React from "react";
import EventCard from "../../components/EventCard";
import s from "./style.module.css";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
const Events = () => {
  const dataList = [
    {
      id: 1,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "finished",
    },
    {
      id: 2,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 3,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
    {
      id: 4,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "finished",
    },
    {
      id: 5,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 6,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
    {
      id: 7,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "finished",
    },
    {
      id: 8,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 9,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
    {
      id: 10,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 11,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
    {
      id: 12,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "finished",
    },
    {
      id: 13,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 14,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
    {
      id: 15,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "finished",
    },
    {
      id: 16,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "inprogress",
    },
    {
      id: 17,
      title: "Встреча с NN",
      date: "21.10.22-30.10.22",
      status: "appointed",
    },
  ];
  const [value, setValue] = React.useState(null);
  return (
    <div className={s.events_list}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
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
