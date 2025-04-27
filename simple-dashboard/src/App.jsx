import { useEffect, useState } from "react";
import "./App.css";
import { useMediaQuery } from "./hooks/useMediaQuery";
import MainContent from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])

  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainContent />
      </div>
    </>
  );
}


export default App;