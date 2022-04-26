import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>StarDB</h1>
        </div>
        <ul>
          <li><a href="#">Planet</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Starship</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;