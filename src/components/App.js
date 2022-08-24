import React, { useState } from "react";
import Nav from "./Nav";
import piggies from "../porkers_data";
import CardInfo from "./CardInfo";
import Filter from "./Filter";

function App() {
  const [sortBy, setSortBy] = useState("name");
  const [showGreased, setShowGreased] = useState(false);
  const piggiesToDisplay = piggies
    .filter(pig => (showGreased ? pig.greased : true))
    .sort((pig1, pig2) => {
      if (sortBy === "weight") {
        return pig1.weight - pig2.weight;
      } else {
        return pig1.name.localeCompare(pig2.name);
      }
    });
  return (
    <div className="App">
      <Nav />
      <Filter
        showGreased={showGreased}
        onChangeShowGreased={setShowGreased}
        sortBy={sortBy}
        onChangeSortBy={setSortBy}
      />
      <CardInfo pigg={piggiesToDisplay} />
    </div>
  );
}

export default App;
