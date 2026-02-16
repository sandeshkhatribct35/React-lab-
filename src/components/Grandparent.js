import React, { useState } from "react";
import Parent from "./Parent";

function Grandparent() {
  const [userName] = useState("John Doe");

  return (
    <div>
      <p>Grandparent Component</p>
      <Parent userName={userName} />
    </div>
  );
}

export default Grandparent;
