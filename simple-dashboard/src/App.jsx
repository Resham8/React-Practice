import { useState } from "react";
import "./App.css";
import { SidebarToggle } from "./icons/SidebarToggle";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainContent />
      </div>
    </>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div className="fixed top-0 left-0 cursor-pointer bg-white h-screen p-2" onClick={() => {
        setSidebarOpen(!sidebarOpen);
      }}>
        <SidebarToggle />
      </div>
    );
  }

  return (
    <div className="w-80 h-screen bg-red-100 fixed top-0 left-0 z-10 " >
      <div>
        <div
          className="cursor-pointer hover:bg-slate-200 p-2"  
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="h-48 bg-black hidden md:block"></div>
      <div className="grid grid-cols-11 gap-7 p-8">
        <div className="h-96 rounded-2xl bg-red-200 md:col-span-3 -translate-y-24 shadow-lg col-span-11
        hidden md:block ml-9"></div>
        <div className="h-96 rounded-2xl bg-green-200 md:col-span-5 shadow-lg col-span-11"></div>
        <div className="h-96 rounded-2xl bg-yellow-200 md:col-span-3 shadow-lg col-span-11"></div>
      </div>
    </div>
  );
}

export default App;
