import { Link } from "react-router-dom";
import "./NavLogo.css";

function NavLogo() {
  return (
    <div class="nav__logo">
      <Link to="/">
        <i class="fas fa-camera"></i> PHOING
      </Link>
    </div>
  );
}

export default NavLogo;
