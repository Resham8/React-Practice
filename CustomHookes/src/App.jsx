import { useState } from "react";
import "./App.css";
import UseFetch from "./components/UseFetch";
import UseDebounce from "./components/UseDebounce";
import UsePrev from "./components/UsePrev";
import UseOnline from "./components/UseOnline";

function App() {
  const [currentHook, setCurrentHook] = useState(0);
  const [previousHook, setPreviousHook] = useState(null);

  const handleNavigation = (newHook) => {
    setPreviousHook(currentHook);
    setCurrentHook(newHook);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React Custom Hooks Demo</h1>

      {currentHook === 0 ? (
        <div className="hook-navigation">
          <button className="nav-button" onClick={() => handleNavigation(1)}>
            useFetch
          </button>
          <button className="nav-button" onClick={() => handleNavigation(2)}>
            useDebounce
          </button>
          <button className="nav-button" onClick={() => handleNavigation(3)}>
            usePrev
          </button>
          <button className="nav-button" onClick={() => handleNavigation(4)}>
            useOnline
          </button>
        </div>
      ) : (
        <div>
          <div className="hook-container">
            {currentHook === 1 && <UseFetch />}
            {currentHook === 2 && <UseDebounce />}
            {currentHook === 3 && <UsePrev />}
            {currentHook === 4 && <UseOnline />}
          </div>
          <button
            className="back-button"
            onClick={() => setCurrentHook(previousHook ?? 0)}
          >
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
