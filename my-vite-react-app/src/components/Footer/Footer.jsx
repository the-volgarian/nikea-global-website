import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nikea Global Ltd. Всички права запазени.</p>

        <div className="footer-links">
          <a href="/privacy-policy">Политика за поверителност</a>
          <a href="/terms">Общи условия</a>
          <a href="/contact">Контакти</a>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/nikea_global/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
