import { useState } from "react";
import usePrev from "../hookes/usePrev";

function UsePrev() {
  const [count, setCount] = useState(0);
  const previousVal = usePrev(count);

  return (
    <div>
      <h2 className="hook-title">usePrev Hook</h2>
      <div className="result-container">
        <div className="counter-display">
          <p className="counter-value">Current Count: <span className="highlight">{count}</span></p>
          <p className="counter-value">Previous Count: <span className="highlight">{previousVal !== undefined ? previousVal : "None"}</span></p>
        </div>
        
        <div className="counter-controls">
          <button 
            className="counter-button increment" 
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button 
            className="counter-button decrement" 
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
        
        <div className="hook-description">
          <p>This hook tracks the previous value of a state variable or prop across renders.</p>
        </div>
      </div>
    </div>
  );
}

export default UsePrev;