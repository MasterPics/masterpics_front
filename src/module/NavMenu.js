import { Link } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {
  return (
    <ul className="nav__menu">
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <Link to="/portfolio/">Portfolio</Link>
      </li>
      <li>
        <Link to="/reference/">Reference</Link>
      </li>
      <li>
        <Link to="/place/">Place</Link>
      </li>
      <li>
        <Link to="/with_brand/">Collaboration</Link>
      </li>
    </ul>
  );
}

export default NavMenu;
