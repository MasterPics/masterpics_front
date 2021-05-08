// import { Link } from "react-router-dom";
import Logo from "../module/Logo";
import NavMenu from "../module/NavMenu";
// import NavProfile from "../module/NavProfile";
import "../css/router/GNB.css";

function GNB() {
  return (
    <nav className="GNB" id="GNB">
      <div className="nav_left">
        <Logo short={true} />
      </div>
      <NavMenu />
      {/* <NavProfile />
      <Link to="#" className="nav__toggleBtn">
        <i className="fas fa-bars"></i>
      </Link> */}
    </nav>
  );
}

export default GNB;
