import React, { useState, useEffect } from "react";
import moment from "moment";
import styles from "../Timer/Timer.module.scss";

const TimerComponent = ({ value, title }) => {
  return (
    <>
      <div>
        <div className="d-flex font-small fw-normal">
          <div className={styles.timer}>{value[0]}</div>
          <div className={styles.timer}>{value[1]}</div>
        </div>
        <span className="text-uppercase font-small-timer">{title}</span>
      </div>

      <span className={[styles.colon, "text-center"].join(" ")}>:</span>
    </>
  );
};

const Timer = () => {
  const [duration, setDuration] = useState(moment.duration());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const startDate = moment.utc("2015-06-26");
      const currentDate = moment.utc();
      const diffDuration = moment.duration(currentDate.diff(startDate));
      setDuration(diffDuration);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addLeadingZeros = (value) => {
    const stringValue = value.toString();
    return stringValue.length === 1 ? `0${stringValue}` : stringValue;
  };

  const years = addLeadingZeros(duration.years());
  const months = addLeadingZeros(duration.months());
  const days = addLeadingZeros(duration.days());
  const hours = addLeadingZeros(duration.hours());
  const minutes = addLeadingZeros(duration.minutes());
  const seconds = addLeadingZeros(duration.seconds());

  return (
    <div
      className={[
        styles.timerContainer,
        "d-flex flex-column flex-md-row justify-content-center text-center",
      ].join(" ")}
    >
      <TimerComponent value={years} title="Years" />

      <TimerComponent value={months} title="Months" />

      <TimerComponent value={days} title="Days" />

      <TimerComponent value={hours} title="Hours" />

      <TimerComponent value={minutes} title="Minutes" />

      <TimerComponent value={seconds} title="Seconds" />
    </div>
  );
};

export default Timer;
