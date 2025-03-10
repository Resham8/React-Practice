import React, { useEffect, useState } from "react";


const ColorCard = ({randomRGB, options, correctAns, refreshGame}) => {
  const [guessColor, setguessColor] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(()=>{
    setguessColor(randomRGB)
  }, [randomRGB])

  function winDecide(color){
    if(color == correctAns){
      setMessage("🎉 Yay correct ans! 🥳")
      setTimeout(() => {
        setMessage(""); 
        refreshGame();
      }, 1000);
    } else {
      setMessage("Try another guess 🤨")
    }
  }

  return (
    <>
      <h1>Guess The Color</h1>
      <p className="color-code">{guessColor}</p>
      <p>Pick the correct color:</p>
      <div className="options">
        {options.map((color, index) => (          
          <button
          key={index}
          className="option-btn"
          style={{ backgroundColor: `${color}` }}
          onClick={() => winDecide(color)}
        ></button>))}      
      </div>
      <p className="message">{message}</p>
    </>
  );
};



export default ColorCard;