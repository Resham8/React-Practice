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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Travel Destinations Explorer</h1>
        <p className="hero-subtitle">Discover amazing places to visit around the world!</p>
        <Link to="/destinations" className="explore-button">Explore Destinations</Link>
      </div>
      
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Global Coverage</h3>
          <p>Explore destinations from every corner of the world</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Detailed Information</h3>
          <p>Get important facts and statistics about each location</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🏛️</div>
          <h3>Cultural Insights</h3>
          <p>Learn about languages, currencies, and local customs</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-container">
      <h2>About Travel Destinations Explorer</h2>
      
      <div className="about-content">
        <p>
          Travel Destinations Explorer is a web application designed to help travelers discover 
          and learn about countries around the world. Our mission is to provide accurate, 
          up-to-date information about global destinations to help you plan your next adventure.
        </p>
        
        <h3>Our Data</h3>
        <p>
          We source our information from the RestCountries API, which provides comprehensive 
          data about countries including geographic information, demographics, languages, 
          currencies, and more. This ensures that you have access to reliable information 
          for your travel planning.
        </p>
        
        <h3>How to Use</h3>
        <p>
          Simply browse our randomly selected destinations or refresh to discover new ones. 
          Click on any destination to view detailed information including capital cities, 
          languages spoken, currencies used, and other practical travel information.
        </p>
        
        <h3>Contact Us</h3>
        <p>
          Have suggestions or feedback? We'd love to hear from you!  
           <p><a href="https://x.com/RylieOnTheRise">Contact me</a></p>
        </p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
}

export default App;