import logo from "../../assets/images/logo.png";
import "./styles.scss";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__links">
        <a href="/">Interactive Interface</a>
        <a href="/">Features</a>
      </div>
    </div>
  );
}

export default Navbar;
