// src/components/Home.js
import React from "react";
export default function Home() {
  return <h2>Home Page</h2>;
}



// src/components/Navigation.js


// src/components/UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}
