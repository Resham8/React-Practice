import React from 'react'

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button className="btn">Login</button>
       
      </div>
    </div>
  )
}

export default Login