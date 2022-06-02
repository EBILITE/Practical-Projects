import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // ==================================This logic helps delete unwanted places to visit.....
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  // =============================This Logic Fethed the url api and apply its logic.
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // ==================================useEffect that fetches the url====
  useEffect(() => {
    fetchTours();
  }, []);

  // ===================================The Loading Page Display=======
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // =======================================Refresh  button logic ======
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh{" "}
          </button>
        </div>
      </main>
    );
  }
  //  =============================================Main Display========
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
