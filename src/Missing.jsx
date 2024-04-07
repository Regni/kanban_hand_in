import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="missingContainer">
      <h1>This page does not excist!</h1>
      <Link to="/">
        <button>Return to the board!</button>
      </Link>
    </div>
  );
};

export default Missing;
