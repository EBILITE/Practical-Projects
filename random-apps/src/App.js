import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [reload, setReload] = useState(false);

  const toggle = () => {
    setPeople(data);
    setReload(false);
  };

  const clearAll = () => {
    setPeople((prevPeople) => []);
    setReload(true);
  };

  const removeBirthday = (id) => {
    const newBirthday = people.filter((item) => item.id !== id);
    setPeople(newBirthday);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((item) => {
          return <List {...item} key={item.id} removeBirthday={removeBirthday} />;
        })}

        {reload ? (
          <button onClick={() => toggle()}>Reload</button>
        ) : (
          <button onClick={() => clearAll()}>Clear All</button>
        )}
      </section>
    </main>
  );
}

export default App;
