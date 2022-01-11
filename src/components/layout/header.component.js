import React from 'react';

const Header = () => {
  return <header>
    <nav className="amber accent-4">
      <div className="container nav-wrapper">
        <a href="/" className="brand-logo" id="logo">cubetimer.io</a>
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
    </nav>
  </header>
};

export default Header;
