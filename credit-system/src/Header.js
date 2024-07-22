import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
    <div className="logo">STAIRS</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/credits">Credits</Link></li>
          <li><Link to="/login">Log out</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
