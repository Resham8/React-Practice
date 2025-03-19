import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DestinationsDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, [id]);

  async function fetchDestinations() {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const country = data[0];
        setDestination({
          name: country.name.common,
          country: country.region,
          capital: country.capital?.[0] || "No capital",
          language: Object.values(country.languages || {}).join(", ") || "Various languages",
          currency: Object.values(country.currencies || {})
            .map(c => `${c.name} (${c.symbol})`)
            .join(", ") || "Various currencies",
          population: country.population ? new Intl.NumberFormat().format(country.population) : "Unknown",
          drivingSide: country.car?.side || "Unknown",
          timezone: country.timezones?.[0] || "Unknown timezone",
          subregion: country.subregion || "Not specified",
          borders: country.borders?.join(", ") || "No land borders",
          image: country.flags.png,
          flagAlt: country.flags.alt || `Flag of ${country.name.common}`,
        });
      } else {
        setError("Country not found");
      }
    } catch (error) {
      setError(error.message || "Failed to fetch destination");
      console.error("Error fetching destination:", error);
    }
    setLoading(false);
  }

  if (loading) return <h2>Loading destination...</h2>;
  if (error || !destination) return <h2>Destination not found</h2>;

  return (
    <div className="destination-detail">
      <div className="destination-header">
        <h2>{destination.name}, {destination.country}</h2>
        <Link to="/destinations" className="back-button">Back to Destinations</Link>
      </div>
      
      <div className="destination-hero">
        <img 
          src={destination.image} 
          alt={destination.flagAlt} 
          className="destination-detail-image" 
        />
      </div>
      
      <div className="destination-info-container">
        <div className="info-section">
          <h3>Capital</h3>
          <p>{destination.capital}</p>
        </div>
        
        <div className="info-section">
          <h3>Population</h3>
          <p>{destination.population}</p>
        </div>

        <div className="info-section">
          <h3>Language</h3>
          <p>{destination.language}</p>
        </div>
        
        <div className="info-section">
          <h3>Currency</h3>
          <p>{destination.currency}</p>
        </div>

        <div className="info-section">
          <h3>Driving Side</h3>
          <p>People drive on the {destination.drivingSide} side of the road</p>
        </div>
        
        <div className="info-section">
          <h3>Timezone</h3>
          <p>{destination.timezone}</p>
        </div>

        <div className="info-section">
          <h3>Region</h3>
          <p>{destination.subregion}, {destination.country}</p>
        </div>
        
        <div className="info-section">
          <h3>Borders</h3>
          <p>{destination.borders}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationsDetails;