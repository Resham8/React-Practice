import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <Header/>
      <main className="main">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
