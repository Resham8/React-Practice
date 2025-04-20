import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
function Navbar() {
  const cartCount = 3; // Replace with dynamic count from state or context

  return (
    <header>
      <div className="header-container">
        <h1>amazon.in</h1>
        <div className="header-right">
          <span>Hello, user</span>
          <div className="cart-icon-wrapper">
            <ShoppingCart color="white" size={24} />
            <div className="cart-badge">{cartCount}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
