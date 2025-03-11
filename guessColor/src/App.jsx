import { useEffect, useState } from "react";
import "./App.css";
import ColorCard from "./colorCard";

function App() {
  const [options, setOptions] = useState([]);
  const [correctAns, setCorrectAns] = useState(null);

  useEffect(() => {
    refreshGame();
  }, []);

  function refreshGame() {
    const newCorrectAns = generateRandomRGB();
    setCorrectAns(newCorrectAns);

    const randomOptions = [
      generateRandomRGB(),
      generateRandomRGB(),
      generateRandomRGB(),
    ];
    randomOptions.push(newCorrectAns);
    setOptions(randomOptions.sort(() => Math.random() - 0.5));
  }

  return (
    <>
      <ColorCard
        randomRGB={correctAns}
        options={options}
        correctAns={correctAns}
        refreshGame={refreshGame}
      ></ColorCard>
    </>
  );
}

function generateRandomNo() {
  return Math.floor(Math.random() * 256);
}

function generateRandomRGB() {
  const red = generateRandomNo();
  const green = generateRandomNo();
  const blue = generateRandomNo();
  return `rgb(${red}, ${green}, ${blue})`;
}

export default App;
