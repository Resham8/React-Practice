import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  async function fetchDestinations() {
    try {
      const codes = getRandomCountryCodes(10);
      console.log(`codes: ${codes}`);
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}`
      );
      const data = await response.json();
      console.log(data[1]);
      const formattedData = data.map((country) => ({
        id: country.cca3,
        name: country.name.common,
        country: country.region,        
        image: country.flags.png,
      }));
      setDestinations(formattedData);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching destinations:", error);
    }
    setLoading(false);
  }
  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading destinations...</h2>;

  return (
    <div className="destinations-container">
      <div className="destinations-header">
        <h2>Explore Destinations</h2>
        <button 
          onClick={() => {
            setLoading(true);
            fetchDestinations();
          }}
          className="refresh-button"
        >
          Discover New Destinations
        </button>
      </div>
      {loading ? (
        <div className="loading-container">
          <h2>Loading destinations...</h2>
        </div>
      ) : error ? (
        <div className="error-container">
          <h2>Error: {error}</h2>
        </div>
      ) : (
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-image"
                />
              </div>
              <div className="destination-info">
                <h3>{destination.name}, {destination.country}</h3>
                <p>{destination.capital}</p>
                <Link to={`/destinations/${destination.id}`} className="view-details-button">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getRandomCountryCodes(count) {
  const codes = [
    "USA", "CAN", "FRA", "DEU", "JPN", 
    "AUS", "BRA", "IND", "ZAF", "MEX", 
    "CHN", "ITA", "ESP", "GBR", "RUS", 
    "KOR", "ARG", "EGY", "THA", "TUR",
    "NZL", "SGP", "IDN", "PRT", "GRC",
    "NLD", "SWE", "NOR", "DNK", "FIN"
  ];

  return codes.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default Destinations;