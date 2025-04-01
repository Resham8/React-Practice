import { useState } from "react";
import { useFetch } from "../hookes/useFetch";
import useDebounce from "../hookes/useDebouance";

function UseDebounce() {
  const [query, setQuery] = useState("");

  const { finalData, loading, error } = useFetch(
    "https://randomuser.me/api/?results=10",
    20000
  );

  const debouncedSearchVal = useDebounce(query, 500);

  const filteredItems =
    finalData?.results?.filter((result) =>
      result.name.first.toLowerCase().includes(debouncedSearchVal.toLowerCase())
    ) || [];

  return (
    <div>
      <h2 className="hook-title">useDebounce Hook</h2>

      <div className="debounce-container">
        <div className="search-container">
          <label htmlFor="search" className="search-label">
            Search Users:
          </label>
          <input
            id="search"
            type="text"
            className="search-input"
            placeholder="Type to search users..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query !== debouncedSearchVal && (
            <div className="debounce-status">Debouncing...</div>
          )}
        </div>

        <div className="result-container">
          {loading && (
            <div className="status status-loading">Loading...</div>
          )}

          {error && (
            <div className="status status-error">
              Error while fetching user data
            </div>
          )}

          {!loading && !error && (
            <div className="users-list">
              <h4>
                Search Results{" "}
                {filteredItems.length > 0 && `(${filteredItems.length})`}
              </h4>

              {filteredItems.length === 0 ? (
                <p className="no-results">
                  No users found matching "{debouncedSearchVal}"
                </p>
              ) : (
                <ul className="users">
                  {filteredItems.map((item, index) => (
                    <li key={index} className="user-item">
                      {item.name.first} {item.name.last}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UseDebounce;
