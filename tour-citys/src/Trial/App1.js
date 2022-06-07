import React, { useState, useEffect } from "react";
import Loading1 from "./Loading1";
import Tours1 from "./Tours1";
import "./App1.css";
const url = "https://course-api.com/react-tours-project";

function App1() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const deleteTour = (id) => {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  };

  const fetchTour = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading1 />
      </main>
    );
  }

  if (tour.length === 0) {
    return (
      <main>
        <h3>No Tours to View</h3>
        <button onClick={() => fetchTour()}>Refresh</button>
      </main>
    );
  }
  return (
    <main>
      <Tours1 tour={tour} deleteTour={deleteTour} />
    </main>
  );
}

export default App1;
