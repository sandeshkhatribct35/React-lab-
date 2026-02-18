import React from "react";

function ProductCard({ laptop }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "200px", textAlign: "center" }}>
      <img
        src={laptop.image}  // <-- /imagy.jpeg from public folder
        alt={laptop.name}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{laptop.name}</h3>
      <p>Brand: {laptop.brand}</p>
      <p>Price: ${laptop.price}</p>
    </div>
  );
}

export default ProductCard;
