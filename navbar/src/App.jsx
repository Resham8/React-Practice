import './App.css'
import { useEffect, useState } from "react";
import SpinnerComponent from './Spinner';

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });

  }, [currentTab])
  
  return <div className="app-container">
    <div className="navbar">
      <button onClick={function() {
        setCurrentTab(1)
      }} className={currentTab == 1 ? "active" : ""}>Todo #1</button>
      <button onClick={function() {
        setCurrentTab(2)
      }} className={currentTab == 2 ? "active" : ""}>Todo #2</button>
      <button onClick={function() {
        setCurrentTab(3)
      }} className={currentTab == 3 ? "active" : ""}>Todo #3</button>
      <button onClick={function() {
        setCurrentTab(4)
      }} className={currentTab == 4 ? "active" : ""}>Todo #4</button>
    </div>
    
    <div className="content-area">
      {/* {console.log(tabData)} */}
      
      {loading ? <SpinnerComponent/> : tabData.title}
    </div>
  </div>
}

export default App