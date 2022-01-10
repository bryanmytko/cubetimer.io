import React from 'react';

const Footer = () => {
  return <footer className="grey darken-4">
    <div className="container center-align white-text">
      <p>&copy; 2014-{new Date().getFullYear()} &hearts; Bryan Mytko</p>
    </div>
  </footer>
};

export default Footer;
