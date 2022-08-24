import React, { useState } from "react";

const HogDetail = ({ image, weight, greased, spec, name, medal }) => {
  
  const [click, setClick] = useState(false);

  function change() {
    setClick(click => !click);
  }

  return (
    <div className="ui link cards" onClick={change}>
      <div className="card">
        <div className="image">
          <img src={image} alt="HOGS" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          {click ? (
            <div>
              <p>Weight: {weight}</p>
              <p>Specialty: {spec}</p>
              <p>Highest Medal: {medal}</p>
              <p>{greased ? "Greased" : "Not Greased"}</p>
              
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HogDetail;
