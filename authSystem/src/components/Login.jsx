import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from "../context/authSystemContext";
import Home from './Home';

const Login = ({ propUsername, handleChange, propLogin }) => {
  const { username, setUsername,isLoggedIn,setIsloggedIn } = useContext(AuthContext);

  function loginfun() {
    if (username.trim()) {
      setIsloggedIn(true);
    } else {
      alert("please enter username..");
    }
  }

  if(isLoggedIn){
    return <Home/>
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value) }
          /> 
          
        </div>
        

        <button className="btn" onClick={loginfun}>Login</button>
       
      </div>

      
    </div>
  )
}
// handleChange(e.target.value)
export default Login