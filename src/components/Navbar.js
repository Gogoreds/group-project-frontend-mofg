import { Link } from "react-router-dom";
import "./navbar.css";
import React from "react";

const Navbar = () => {
    return (
      <header>
        <nav className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/education" className="nav-item">Education</Link>
          <Link to="/apply" className="nav-item">Apply</Link>
          <Link to="/staff" className="nav-item">Staff</Link>
          <Link to="/administration" className="nav-item">Administration</Link>
          <Link to="/login" className="nav-item">Login</Link>
        </nav>
      </header>
    );
  };


export default Navbar;