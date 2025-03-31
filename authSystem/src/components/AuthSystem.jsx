import { useState } from "react";
import Login from "./Login";
import AppBar from "./AppBar";
import Home from "./Home";
import AuthSystemContext from "../context/authSystemContext";

const AuthSystem = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isContextApi, setIsContextApi] = useState(false);
  // console.log(isContextApi)
  
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

  function handleContextChange(){
    setIsContextApi(!isContextApi)
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
          <label htmlFor="use-context">
              Use Context API: {isContextApi ? 'On' : 'Off'}
            </label>
          <input type="checkbox" id="use-context" checked={isContextApi} onChange={handleContextChange} /> 
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
