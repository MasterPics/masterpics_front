import { Link } from "react-router-dom";
import "./NavProfile.css";

function NavProfile({ isAuthenticated = false, redirect_field_value }) {
  return (
    <ul class="nav__profile">
      {isAuthenticated ? (
        <>
          <li>
            <Link to="/chat/">Messages</Link>
          </li>
          <form method="post" action="/">
            <input
              class="here"
              type="submit"
              value="Log Out"
              onclick="return confirm('Are you sure?');"
            ></input>
          </form>

          <li>
            <Link to="/profile_detail">
              My profile&nbsp;<i class="far fa-user-circle"></i>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/">Log In/Sign Up</Link>
          </li>
          <li>
            <Link to="/">
              My profile&nbsp;<i class="far fa-user-circle"></i>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavProfile;
