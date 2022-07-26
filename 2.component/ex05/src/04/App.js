import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";



export default function App() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [ticks, setTicks] = useState(0)
  const date = new Date();
  useEffect(() => {
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    setInterval(() => {
        const date = new Date();
        const hours = String(date.getHours());
        const minutes = String(date.getMinutes());
        const seconds = String(date.getSeconds());
    
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        //setTicks(ticks + 1);
        //setTicks((ticks)=> ticks+1)
        setTicks((prevTicks)=> prevTicks+1)
      },1000);

  }, []);

  return (
    <>
    <span>{ticks}</span>
    <Clock
      message={"ex05: useEffect Hook example"}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
    </>
  );
}
