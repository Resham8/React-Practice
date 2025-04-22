import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useRecoilValue } from "recoil";
import { cartTotalSelector } from "../store/cartTotalSelector";

function Navbar() {
  const { itemCount } = useRecoilValue(cartTotalSelector);
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>amazon.in</h1>
        </Link>
        <div className="header-right">
          <span>Hello, user</span>
          <Link to="/cart">
            <div className="cart-icon-wrapper">
              <ShoppingCart color="white" size={24} />
              <div className="cart-badge">{itemCount}</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
