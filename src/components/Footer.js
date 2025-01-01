import React from "react";
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Connect with Me:</p>
        <a href="https://www.linkedin.com/in/ishita-lal-1976741b3/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/ishi-ta-lal"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
        <a href="https://x.com/Tech_ishita"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsTwitterX className="icon-footer"/>
        </a>
        <a href="https://www.instagram.com/_ishita_lal_/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsInstagram className="icon-footer"/>
        </a>
      </div>

      <p className="text-footer">Build with 💜 by Ishita Lal</p>
    </footer>
  );
}

export default Footer;
