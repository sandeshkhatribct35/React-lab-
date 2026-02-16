import React from "react";
import imagy from "../images/imagy.jpeg"; // import the image

function ProductCard({ laptop }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img
        src={imagy} 
        alt={laptop.name}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{laptop.name}</h3>
      <p>Price: ${laptop.price}</p>
      <p>Brand: {laptop.brand}</p>
    </div>
  );
}

export default ProductCard;
