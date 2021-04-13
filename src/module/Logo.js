import { Link } from "react-router-dom";
import "../css/module/Logo.css";

function Logo({ short }) {
  return (
    <div className="Logo">
      <Link to="/">{short ? "M'P" : "MasterPic's"}</Link>
    </div>
  );
}

export default Logo;
