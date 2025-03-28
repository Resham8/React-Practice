import React from 'react'
import { useState } from 'react';

const Login = ({ username, handleChange, login }) => {
  
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
            onChange={(e) => handleChange(e.target.value)}          
          />
        </div>
        

        <button className="btn" onClick={login}>Login</button>
       
      </div>
    </div>
  )
}

export default Login