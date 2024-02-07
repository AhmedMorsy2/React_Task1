import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase text-white fw-bold fs-2" to="/">
            Start framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link text-uppercase fw-bold text-white"to="About">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3 fw-bold">
                <NavLink className="nav-link text-uppercase text-white" to="Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3 fw-bold">
                <NavLink className="nav-link text-uppercase text-white" to="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
