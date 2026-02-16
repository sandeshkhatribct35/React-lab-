// src/components/FocusInput.js
import React, { useState, useRef } from "react";

function FocusInput() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Name: {name}</p>
    </div>
  );
}

export default FocusInput;
