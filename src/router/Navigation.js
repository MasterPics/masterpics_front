import { Link } from "react-router-dom";
import NavLogo from "../module/NavLogo";
import NavMenu from "../module/NavMenu";
import NavProfile from "../module/NavProfile";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <nav id="nav">
        <div class="nav_left">
          <NavLogo />
          <NavMenu />
        </div>

        <NavProfile />
        <Link to="#" class="nav__toggleBtn">
          <i class="fas fa-bars"></i>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
