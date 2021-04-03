import "./HoverDropdown.css";

function HoverDropdown() {
  return (
    <div className="dropdown">
      <div className="dropbtn">
        <div className="btn">
          <span className="noselect">
            <a href="/">Category</a>
          </span>
        </div>
      </div>
      <div className="dropdown-content">
        <a href="/">Photographer</a>
        <a href="/">Model</a>
        <a href="/">Hair/makeup</a>
        <a href="/">Stylist</a>
        <a href="/">Other use</a>
      </div>
    </div>
  );
}

export default HoverDropdown;
