import { Link } from "react-router-dom";
import NavLogo from "../module/NavLogo";
import NavMenu from "../module/NavMenu";
import NavProfile from "../module/NavProfile";
import "./Navigation.css";

function Navigation() {
  return (
    <nav id="nav">
      <div className="nav_left">
        <NavLogo />
        <NavMenu />
      </div>

      <NavProfile />
      <Link to="#" className="nav__toggleBtn">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
}

export default Navigation;
