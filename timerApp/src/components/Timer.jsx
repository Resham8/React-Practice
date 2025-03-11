import { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let currentDate = new Date();
    
    let currentHour = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    const totalTime = calculateTime(
      currentHour,
      currentMinutes,
      currentSeconds
    );
    setTime(totalTime);
  }, []);
  const { hours, minutes, seconds } = formatTime(time);
  return (
    <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            {hours}:{minutes}:{seconds}
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton}>Start</button>
        <button className={style.actionButton}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
