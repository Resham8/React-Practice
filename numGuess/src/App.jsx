import { useState } from 'react';
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  
  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <>
     <div className="container">
      <h1 className="title">Random Number Generator</h1>
      <p className="number-display">Your Number: <span>{number}</span></p>
      <button className="generate-btn" onClick={generateRandomNumber}>
        Generate Number
      </button>
    </div>
    </>
  )
}

export default App
