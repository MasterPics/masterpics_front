import { Link } from "react-router-dom";
import "../css/module/HoverDropdown.css";

function HoverDropdown({ name, items }) {
  return (
    <div className="HoverDropdown">
      <div className="dropbtn">
        <div className="btn">
          <span className="noselect">
            <a href="/">{name}</a>
          </span>
        </div>
      </div>
      {items ? (
        <div className="dropdown-content">
          {items.map((item, index) => {
            return (
              <Link
                to={item.link ? item.link : "#"}
                onClick={item.onClick}
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HoverDropdown;
