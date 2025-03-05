import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteData, setQuoteData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetchQuote();
  }, []);

  function fetchQuote() {
    setLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuoteData(data);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <p className="quote">{loading ? "Loading..." : quoteData.quote}</p>
          <p className="auther">{loading ? "Loading..." : quoteData.author}</p>        
        </div>
        <button onClick={fetchQuote}>Get Quote</button>
      </div>
    </>
  );
}

export default App;
