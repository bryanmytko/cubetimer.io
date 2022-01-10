import React from 'react';
import Logo from '../layout/logo.component'

const Header = () => {
  return <header>
    <nav className="amber accent-4">
      <div class="container nav-wrapper">
        <a href="#" class="brand-logo" id="logo">cubetimer.io</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">Timer</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Tutorials</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Puzzles</a></li>
        </ul>
      </div>
    </nav>
  </header>
};

export default Header;
