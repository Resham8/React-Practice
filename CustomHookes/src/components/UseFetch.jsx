import { useState } from "react";
import { useFetch } from "../hookes/useFetch";

function UseFetch() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${currentPost}`,
    10000
  );

  return (
    <div>
      <h2 className="hook-title">useFetch Hook</h2>
      <div className="fetch-container">
        <div className="fetch-controls">
          <h3>Select a Todo:</h3>
          <div className="button-group">
            <button 
              className={`fetch-button ${currentPost === 1 ? 'active' : ''}`}
              onClick={() => setCurrentPost(1)}
            >
              Todo #1
            </button>
            <button 
              className={`fetch-button ${currentPost === 2 ? 'active' : ''}`}
              onClick={() => setCurrentPost(2)}
            >
              Todo #2
            </button>
            <button 
              className={`fetch-button ${currentPost === 3 ? 'active' : ''}`}
              onClick={() => setCurrentPost(3)}
            >
              Todo #3
            </button>
          </div>
        </div>
        
        <div className="result-container">
          {loading && <div className="status status-loading">Loading...</div>}
          
          {error && (
            <div className="status status-error">
              Error while fetching the data
            </div>
          )}
          
          {!loading && !error && finalData && (
            <div className="data-display">
              <h4>Todo #{currentPost}</h4>
              <div className="json-data">
                <pre>{JSON.stringify(finalData, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default UseFetch;