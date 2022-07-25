import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";



export default function App() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

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
      },1000);

  }, []);



  return (
    <Clock
      message={"ex05: useEffect Hook example"}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}
