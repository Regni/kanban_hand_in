import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("nl-NL"));

  useEffect(() => {
    const timer = setInterval(() =>
      setTime(new Date().toLocaleTimeString("nl-NL"), 1000)
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header>
      <Link className="homeWrapper" to="/">
        <div>
          <span>The Board App</span>
        </div>
      </Link>
      <div>
        <span>{time}</span>
      </div>
    </header>
  );
};

export default Header;
