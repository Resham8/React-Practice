import { useEffect, useState } from "react";
import "./App.css";
import ColorCard from "./colorCard";

function App() {  

  const [options, setOptions] = useState([]);
  const [correctAns, setCorrectAns] = useState(null);

  useEffect(() => {
    const newCorrectAns = generateRandomRGB();
    setCorrectAns(newCorrectAns);

    const randomOptions = [generateRandomRGB(),generateRandomRGB(),generateRandomRGB()];
    randomOptions.push(newCorrectAns);
    setOptions(randomOptions.sort(() => Math.random() - 0.5))
  }, [])


  return (
    <>
      <div className="container">
        <ColorCard randomRGB={correctAns} options={options} message={"try a guess"}></ColorCard>
      </div>
    </>
  );
}

function generateRandomNo(){
  return 1 + Math.floor(Math.random() * (255 - 1));
}

function generateRandomRGB(){
  const red = generateRandomNo();
  const green = generateRandomNo();
  const blue = generateRandomNo();
  return `rgb(${red}, ${green}, ${blue})`;
}

export default App;
