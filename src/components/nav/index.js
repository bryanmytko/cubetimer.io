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
        <li><a href="/">Profile</a></li>
        <li><a href="/">Tutorials</a></li>
        <li><a href="/">Puzzles</a></li>
        <li className="spacer">|</li>
        <li><a href="/">Login</a></li>
      </ul>
    </div>
  </nav>;
};

export default Nav;
