import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-warning">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            src={`../img/logo-tractomula-head.png`}
            className="bi me-2"
            width="50"
            height="50"
            aria-label="Bootstrap"
          />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/clients" className="nav-link px-2 link-dark">
              Clientes
            </Link>
          </li>
          <li>
            <Link to="/drivers" className="nav-link px-2 link-dark">
              Conductores
            </Link>
          </li>
          <li>
            <Link to="/manage" className="nav-link px-2 link-dark">
              Administracion
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-dark me-2">
            Login
          </button>
          <button type="button" className="btn btn-dark">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
