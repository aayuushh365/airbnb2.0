import React from "react";

const Rental = ({ title, image, price }) => {
  return (
    <div>
      <div
        className=""
        style={{ display: "flex", flexDirection: "column", margin: "2rem" }}
      >
        <img src={image} alt="" className="image-card" style={{ borderRadius:"1.3rem"}}/>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
 
    </div>
  );
};

export default Rental;
