import React from "react";
import Tour1 from "./Tour1";

function Tours1({ tour, deleteTour }) {
  return (
    <div>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="Underline"></div>
      </div>

      <div>
        {tour.map((tour) => {
          return <Tour1 key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours1;
