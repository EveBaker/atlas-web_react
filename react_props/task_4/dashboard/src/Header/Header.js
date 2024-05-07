import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Holberton School logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;