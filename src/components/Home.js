// src/components/Home.js
import React from "react";
export default function Home() {
  return <h2>Home Page</h2>;
}

// src/components/About.js
import React from "react";
export default function About() {
  return <h2>About Page</h2>;
}

// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/user/1">User 1</Link>
    </nav>
  );
}

// src/components/UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}
