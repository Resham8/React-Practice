import { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState(null);  

  useEffect(() => {
    if (!isRunning || time === 0) return; 

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval); 
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1; 
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isRunning, time]);

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
        <button className={style.actionButton} onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className={style.actionButton}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
