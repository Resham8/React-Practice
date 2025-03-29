import { useState } from "react";
import Login from "./Login";
import AppBar from "./AppBar";
import Home from "./Home";
import AuthSystemContext from "../context/authSystemContext";

const AuthSystem = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsloggedIn] = useState(false);

  
  function login() {
    if (username.trim()) {
      setIsloggedIn(true);
    } else {
      alert("please enter username..");
    }
  }

  function logout() {
    setUsername("");
    setIsloggedIn(false);
  }

  return (
    <div>
      <AuthSystemContext>
      <AppBar username={username} isLoggedIn={isLoggedIn} logout={logout} />
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            whiteSpace: "nowrap",
          }}
        >
          <label htmlFor="useContext">Use context API</label>
          <input type="checkbox" id="useContext" />
        </div>
      </div>

      {isLoggedIn ? (
        <Home />
      ) : (
        <Login login={login} username={username} handleChange={setUsername} />
      )}
      </AuthSystemContext>
    </div>
  );
};

export default AuthSystem;
