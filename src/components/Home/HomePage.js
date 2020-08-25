import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>PluralSight Administration</h1>
      <p>React Redux and React Router for ultra responsive web apps.</p>
      <Link to="about">Learn More</Link>
    </div>
  );
};

export default HomePage;
