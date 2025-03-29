import React, { useContext } from "react";
import { AuthContext } from "../context/authSystemContext";

const AppBar = ({ propUsername, propIsLoggedIn, propLogout }) => {
  const {username, setUsername,isLoggedIn,setIsloggedIn} = useContext(AuthContext)

  function logout() {
    setUsername("");
    setIsloggedIn(false);
  }

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
