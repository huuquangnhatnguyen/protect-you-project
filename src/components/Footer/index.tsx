import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <h3>Developer: </h3>
          <h4>Nhat Nguyen</h4>
        </div>
        <div className="footer__container__center"></div>
        <div className="footer__container__right">
          <h3>Contact Me</h3>
          <ul>
            <li>2362 Auburn Ave</li>
            <li>Cincinnati, OH</li>
            <li>US</li>
            <li>45219</li>
          </ul>
          <ul>
            <li>Email:</li>
            <li>huuquangnhatnguyen@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
