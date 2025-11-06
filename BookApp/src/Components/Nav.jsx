import React from 'react';
import { Link } from 'react-router-dom'; // ✅ For navigation
import './Nav.css';

function Nav() {
  return (
    <nav id="nav">
      <div className="nav-left">
        <img
          src="https://thumbs.dreamstime.com/b/education-logo-vector-drawing-represents-design-58481419.jpg"
          alt="Logo"
          height={40}
          width={40}
        />
        <h2>BOOK APP</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Nav;
