import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  if (loading) {
    return (
      <main>
        <section>
          <h2 className="loading">Loading ....</h2>
        </section>
      </main>
    );
  }

  const { company, dates, duties, title } = data[value];

  return (
    <main>
      <section>
        <div className="experience">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="general">
          <div className="sidebar">
            {data.map((item, index) => {
              return (
                <button
                  className={`Btn ${index === value && 'active-btn'}`}
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          <div className="mainBar">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="desc" >
                  <FaAngleDoubleRight className="icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
