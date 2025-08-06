import React from "react";
import logo from "../assets/img/rentmatch-logo.png"; // Update the path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      <img src={logo} alt="RentMatch" height="60" width="250" />
    </p>

    <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
      <span className="fw-semibold">Follow us:</span>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} size="lg" />
      </a>
    </div>

    <p className="text-muted small mb-0">
      &copy; 2025 - 2045 RentMatch LLC
    </p>
  </footer>
);