import { Link } from "react-router-dom";
import "./NavLogo.css";

function NavLogo() {
  return (
    <div className="nav__logo">
      <Link to="/">
        <i className="fas fa-camera"></i> PHOING
      </Link>
    </div>
  );
}

export default NavLogo;