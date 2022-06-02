import React, { useState } from "react";

function Tour1({ id, image, info, price, name, deleteTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="TourContainer">
      <div>
        <div>
          <img src={image} alt={name} className="Image" />
        </div>
        <div className="container">
          <div className="name">
            <h5>{name}</h5>
            <h5 className="price">{price}</h5>
          </div>
          <div className="info">
            <p>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "See Less" : "See More"}
              </button>
            </p>
          </div>
          <button className="Interest-btn" onClick={() => deleteTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour1;
