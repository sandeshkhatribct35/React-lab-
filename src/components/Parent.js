import React from "react";
import Child from "./Child";

function Parent({ userName }) {
  return (
    <div>
      <p>Parent Component</p>
      <Child userName={userName} />
    </div>
  );
}

export default Parent;
