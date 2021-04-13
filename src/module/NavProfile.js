import { Link } from "react-router-dom";
import "../css/module/NavProfile.css";

function NavProfile({ isAuthenticated = false, redirect_field_value }) {
  return (
    <ul className="nav__profile">
      {isAuthenticated ? (
        <>
          <li>
            <Link to="/chat">Messages</Link>
          </li>
          <form method="post" action="/">
            <input
              className="here"
              type="submit"
              value="Log Out"
              onClick="return confirm('Are you sure?');"
            ></input>
          </form>

          <li>
            <Link to="/profile/1">
              My profile&nbsp;<i className="far fa-user-circle"></i>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/accounts/signin">Log In/Sign Up</Link>
          </li>
          <li>
            <Link to="/profile/1">
              My profile&nbsp;<i className="far fa-user-circle"></i>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavProfile;
