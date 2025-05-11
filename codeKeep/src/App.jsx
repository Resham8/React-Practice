import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-[#1a1a1a] max-w-screen min-h-screen">
      <NavBar /> 
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
