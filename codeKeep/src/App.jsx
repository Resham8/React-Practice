import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex bg-[#1a1a1a] max-w-screen min-h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
