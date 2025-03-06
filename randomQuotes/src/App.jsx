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

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quoteData.quote}" — ${quoteData.author}`
    )}`;
    window.open(tweetUrl, "_blank");

    // console.log(tweetUrl);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <p className="quote">{loading ? "Loading..." : quoteData.quote}</p>
          <p className="auther">{loading ? "Loading..." : quoteData.author}</p>
        </div>
        <div className="button-container">
          <button className="get-quote-btn" onClick={fetchQuote}>
            Get New Quote
          </button>
          <button className="tweet-btn" onClick={tweetQuote}>
            Tweet This Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
