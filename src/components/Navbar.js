import { Link } from "react-router-dom";
import "./navbar.css";
import React from "react";

const Navbar = () => {
    return (
      <header>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/education">Education</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/administration">Administration</Link>
        </nav>
      </header>
    );
  };


export default Navbar;