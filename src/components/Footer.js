import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; {year} League of Legends Fan Page</p>
      </div>
    </div>
  );
};

export default Footer;
