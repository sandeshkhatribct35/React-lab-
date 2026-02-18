import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const laptops = [
  { name: "MacBook Air", brand: "Apple", price: 999, image: "/imagy.jpeg" },
  { name: "XPS 13", brand: "Dell", price: 1099, image: "/imagy.jpeg" },
  { name: "ThinkPad X1", brand: "Lenovo", price: 1299, image: "/imagy.jpeg" },
];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {laptops.map((laptop, index) => (
        <ProductCard key={index} laptop={laptop} />
      ))}
    </div>
  );
}

export default ProductList;
