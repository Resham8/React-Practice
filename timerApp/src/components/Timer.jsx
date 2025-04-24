import { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions";

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    

  return (
    <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton}>
          Start
        </button>
        <button className={style.actionButton}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
