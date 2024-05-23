// src/Footer.js
import React from 'react';
import footerImage from '../Screenshot from 2024-02-14 16-01-19.png';
import './Footer.css';

const Footer = () => {
  const setTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme);
    localStorage.setItem('movie-theme', theme);
  };

  return (
    <footer className="footer footer-dark">
      <div className="d-flex justify-content-between px-5">
        <div>ALL RIGHTS RESERVED AGILE STORIES</div>
          <img
            src={footerImage}
            alt="logo"
            className="footer-img"
          />
      </div>
    </footer>
  );
};

export default Footer;
