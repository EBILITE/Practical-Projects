import React from "react";
import "./List.css";

const List = ({id, image, name, age, removeBirthday }) => {
  return (
    <>
      <div className="cont">
        <div className="person">
          <img src={image} alt={name} className="person-Img" />
          <div>
            <h4>{name}</h4>
            <h5>{age}</h5>
          </div>
        </div>

        <div className="Btn">
          <button onClick={() => removeBirthday(id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default List;
