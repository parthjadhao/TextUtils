import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  AboutUs
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                } mx-3`}
              >
                <input
                  onClick={props.toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  D/L Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// sepcify data types of prop
// if you tried to enter any other propes other than specified one than it will show error
navbar.prototype = {
  title: PropTypes.string.isRequired,
};

// specify default value of props
// which get assigned if you didnt passed any value
navbar.defaultProps = {
  title: "Set the title name",
};
