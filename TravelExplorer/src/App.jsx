import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import Destinations from "./components/Destinations";
import Layout from "./components/Layout";
import DestinationsDetails from "./components/DestinationsDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationsDetails/>} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Travel Destinations Explorer</h2>
      <p>Discover amazing places to visit around the world!</p>
      <Link to="/destinations">Explore Destinations</Link>
    </div>
  );
}

function About() {
  return <div>about the website</div>;
}

export default App;
