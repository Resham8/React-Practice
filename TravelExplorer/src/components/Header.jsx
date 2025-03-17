import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"} className="nav-links">
          Home
        </Link>
        <Link to={"/destinations"} className="nav-links">
          Destinations
        </Link>
        <Link to={"/about"} className="nav-links">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
