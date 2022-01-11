import React from 'react';
import { Logo } from '../';
import './style.css';

const Nav = () => {
  return <nav className="amber accent-4">
    <div className="container nav-wrapper">
      <Logo />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Timer</a></li>
        <li><a href="/">Statistics</a></li>
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
