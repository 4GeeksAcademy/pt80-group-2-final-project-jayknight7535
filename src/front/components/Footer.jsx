import logo from "../assets/img/rentmatch-logo.png"; 
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";



export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      <img src={logo} alt="RentMatch" height="60" width="250" />
    </p>
    <p className="mb-2">Follow us:</p>
    <div className="d-flex justify-content-center gap-3">
      <a href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://x.com" target="_blank" >
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a href="https://tiktok.com" target="_blank" >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
	  <p className="mb-2 text disabled "> &copy;2025-2045 RentMatch </p>
    </div>
  </footer>
);