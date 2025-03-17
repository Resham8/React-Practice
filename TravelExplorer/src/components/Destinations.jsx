import { useEffect, useState } from "react";

function Destinations() {
  const [destinations, setDestinations] = useState([])
  
  useEffect(() => {
    fetchDestinations();
  },[])

  async function fetchDestinations(){
    try {
        const codes = getRandomCountryCodes(10);
        console.log(`codes: ${codes}`)
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
  }


  return <div>
    <h2>Explore Destinations</h2>
  </div>;
}

function getRandomCountryCodes(count){
    const codes = [
        "USA", "CAN", "FRA", "DEU", "JPN", "AUS", "BRA", "IND", "ZAF", "MEX",
       "CHN", "ITA", "ESP", "GBR", "RUS", "KOR", "ARG", "EGY", "THA", "TUR"
    ]

    return codes.sort(() => 0.5 - Math.random()).slice(0, count)
}

export default Destinations;