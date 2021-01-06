import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";

function Navbar() {
  return (
    <div className="container-fluid py-3 pr-lg-5 Navbar bg-white fixed-top">
      <nav className="navbar navbar-expand-md navbar-light bg-white">
        <Link to="/" className="navbar-brand">
          <Logo width="86px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex align-items-md-center">
            <hr className="w-100 navbar-separator" />
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/atesty-i-certyfikaty">
                Atesty i certyfikaty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dane-techniczne">
                Dane techniczne
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kalkulator-oszczednosci">
                Kalkulator oszczędności
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/finansowanie">
                Finansowanie
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontakt">
                <button type="button" className="btn btn-primary shadow">
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
