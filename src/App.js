// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import LoginStatus from "./components/LoginStatus";
import RegistrationForm from "./components/RegistrationForm";
import WindowResizeListener from "./components/WindowResizeListener";
import FetchUsers from "./components/FetchUsers";
import FocusInput from "./components/FocusInput";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";
import Grandparent from "./components/Grandparent";

function App() {
  // ✅ Laptops data with single image for all
  const laptops = [
    { name: "MacBook Air", brand: "Apple", price: 999, image: "/imagy.jpeg" },
    { name: "XPS 13", brand: "Dell", price: 1099, image: "/imagy.jpeg" },
    { name: "ThinkPad X1", brand: "Lenovo", price: 1299, image: "/imagy.jpeg" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Basics Lab – Your Name Here</h1>

      {/* 1. Product Cards */}
      <h2>1. Product Cards</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {laptops.map((laptop, index) => (
          <ProductCard key={index} laptop={laptop} />
        ))}
      </div>

      <hr />

      {/* 2. Counter */}
      <h2>2. Counter</h2>
      <Counter />

      <hr />

      {/* 3. Login Status */}
      <h2>3. Login Status</h2>
      <LoginStatus />

      <hr />

      {/* 4. Registration Form */}
      <h2>4. Registration Form</h2>
      <RegistrationForm />

      <hr />

      {/* 5. Window Resize Listener */}
      <h2>5. Window Resize Listener</h2>
      <WindowResizeListener />

      <hr />

      {/* 6. Fetch Users */}
      <h2>6. Fetch Users</h2>
      <FetchUsers />

      <hr />

      {/* 7. Focus Input */}
      <h2>7. Focus Input</h2>
      <FocusInput />

      <hr />

      {/* 8. Card with Children */}
      <h2>8. Card Component</h2>
      <Card>
        <p>This is a paragraph inside Card.</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>

      <Card>
        <h3>Heading Inside Card</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>

      <hr />

      {/* 9. Props Drilling */}
      <h2>9. Props Drilling Example</h2>
      <Grandparent />

      <hr />

      {/* 10. React Router */}
      <h2>10. React Router Example</h2>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
