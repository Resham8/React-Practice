import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/destinations:id" element={<DestinationsDetails/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout(){
  return <div style={{height:"100vh", width:"100vw"}}>
    <Header/>
    <div style={{height:"90vh",width:"100vw"}}>
      <Outlet></Outlet>      
    </div>
    footer
  </div>
}

function Header() {
  const headerStyle = {
    backgroundColor: "#4a6fa5",
    padding: "15px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "5px 10px"
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to={"/"} style={linkStyle}>Home</Link>
        <Link to={"/destinations"} style={linkStyle}>Destinations</Link>
        <Link to={"/about"} style={linkStyle}>About</Link>
      </nav>
    </header>
  );
}

function Home() {
return <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <h2>Welcome to Travel Destinations Explorer</h2>
    <p>Discover amazing places to visit around the world!</p>
    <Link to="/destinations">Explore Destinations</Link>
  </div>
}
  
function Destinations(){
  return <div>
    list of destinations
  </div>
}

function DestinationsDetails(){
  return <div>
    selected destinations
  </div>
}

function About(){
  return <div>
    about the website
  </div>
}

export default App;
