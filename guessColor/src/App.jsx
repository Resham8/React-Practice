import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <h1>Guess The Color</h1>
        <p className="color-code">RGB(255, 87, 51)</p>
        <p>Pick the correct color:</p>
        <div className="options">
          <button
            className="option-btn"
            style={{backgroundColor:"#FF5733"}}            
          ></button>
          <button
            className="option-btn"
            style={{backgroundColor:"#33FF57"}}            
          ></button>
          <button
            className="option-btn"
            style={{backgroundColor:"#3357FF"}}            
          ></button>
        </div>
        <p className="message"></p>
      </div>
    </>
  );
}

export default App;
