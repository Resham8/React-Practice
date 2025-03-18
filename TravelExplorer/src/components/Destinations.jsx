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
        bestTime: "Varies by location",
        activities: "Explore nature, culture, and food",
        image: country.flags.png,
      }));
      setDestinations(formattedData);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading destinations...</h2>;

  return (
    <div>
      <h2>Explore Destinations</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {destinations.map((destination) => (
          <div key={destination.id}>
            <img
              src={destination.image}
              alt={destination.name}
              width="200"
              height="150"
            />
            <h3>
              {destination.name}, {destination.country}
            </h3>
            <Link to={`/destinations/${destination.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function getRandomCountryCodes(count) {
  const codes = [
    "USA",
    "CAN",
    "FRA",
    "DEU",
    "JPN",
    "AUS",
    "BRA",
    "IND",
    "ZAF",
    "MEX",
    "CHN",
    "ITA",
    "ESP",
    "GBR",
    "RUS",
    "KOR",
    "ARG",
    "EGY",
    "THA",
    "TUR",
  ];

  return codes.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default Destinations;