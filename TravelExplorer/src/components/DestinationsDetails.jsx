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
      if (data) {
        setDestination({
          name: data[0].name.common,
          country: data[0].region,
          bestTime: "Varies by location",
          activities: "Explore nature, culture, and food",
          image: data[0].flags.png,
        });
      }
    } catch (error) {
        setError(error);
        setLoading(false);
    }
    setLoading(false);
  }

  if (loading) return <h2>Loading destination...</h2>;
  if (error || !destination) return <h2>Destination not found</h2>;

  return (
    <div>
      <h2>{destination.name}, {destination.country}</h2>
      <img src={destination.image} alt={destination.name} width="400" height="300" />
      <p><strong>Best Time to Visit:</strong> {destination.bestTime}</p>
      <p><strong>Activities:</strong> {destination.activities}</p>
      <Link to="/destinations">Back to Destinations</Link>
    </div>
  );
}

export default DestinationsDetails;
