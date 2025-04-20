import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <h1>amazon.in</h1>
        <div className="header-right">
            <span>Hello, user</span>
            
        </div>
      </div>
    </header>
  );
}

export default Navbar;
