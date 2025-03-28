import { useState } from "react";
import Login from "./Login";
import AppBar from "./AppBar";
import Home from "./Home";

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
      <AppBar username={username} isLoggedIn={isLoggedIn} logout={logout} />
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login login={login} username={username} handleChange={setUsername} />
      )}
    </div>
  );
};

export default AuthSystem;
