import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import AmazonCart from "./components/AmazonCart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WishList />} />
          <Route path="/cart" element={<AmazonCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
