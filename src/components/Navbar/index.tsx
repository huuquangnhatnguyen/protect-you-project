import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>Protect+</h2>{" "}
      </div>
      <div className="navbar__links">
        <a href="/">Interactive Interface</a>
        <a href="/">Features</a>
      </div>
    </div>
  );
}

export default Navbar;
