import React, { useEffect, useState } from "react";


const ColorCard = ({randomRGB, options, message}) => {
  const [guessColor, setguessColor] = useState(null);

  useEffect(()=>{
    setguessColor(randomRGB)
  }, [randomRGB])

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
          onClick={() => console.log('World')}
        >{index} {color}</button>))}      
      </div>
      <p className="message">{message}</p>
    </>
  );
};

export default ColorCard;