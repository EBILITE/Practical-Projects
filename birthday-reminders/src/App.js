import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [info, setInfo] = useState(data);
  return (
    <>
      <div className="body">
        <div className="container ">
          <h3>{data.length} Birthdays Today</h3>
          {info.map((item) => {
            return <List {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
