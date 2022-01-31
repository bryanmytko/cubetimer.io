import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../';
import './style.css';

const Nav = () => {
  return <nav className="amber accent-4">
    <div className="container nav-wrapper">
      <Logo />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Timer</Link></li>
        <li><Link to="statistics">Statistics</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="tutorials">Tutorials</Link></li>
        <li className="spacer">|</li>
        <li><Link to="login">Login</Link></li>
      </ul>
    </div>
  </nav>;
};

export default Nav;
