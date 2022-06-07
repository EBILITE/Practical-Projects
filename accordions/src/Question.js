import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(true);

  const handleToggle = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleToggle}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p> {showInfo ? `${info}` : `${info.substring(0, 100)}`} </p>
    </article>
  );
};

export default Question;
