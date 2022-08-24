import React from "react";
import HogDetail from "./HogDetail";

function CardInfo({ pigg }) {
  return (
    <>
      {pigg.map(hog => (
        <HogDetail
          hog={hog}
          image={hog.image}
          key={hog.name}
          name={hog.name}
          weight={hog.weight}
          spec={hog.specialty}
          medal={hog["highest medal achieved"]}
        />
      ))}
    </>
  );
}

export default CardInfo;
