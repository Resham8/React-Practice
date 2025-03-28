import React from "react";

const AppBar = ({ username, isLoggedIn, logout }) => {
  return (
    <div className="appbar">
      <h2>Auth System Demo</h2>

      {isLoggedIn && (
        <div className="appbar-componetnt">
          <p>Welcome, {username}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AppBar;
