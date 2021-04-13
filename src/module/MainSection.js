import "../css/module/MainSection.css";
import { Link } from "react-router-dom";

function MainSection({ name, kr, en, link, images, reverse }) {
  return (
    <div
      className={reverse ? "MainSection MainSection-reverse " : "MainSection"}
    >
      <div className="container">
        <div className="info_section">
          <h3>{name}</h3>
          <p className="kr">{kr}</p>
          <p className="en">{en}</p>
          <Link className="Link" to={link}>
            바로가기
          </Link>
        </div>
        <div className="img_section">
          {images.map((image, index) => {
            return <img key={index} alt={`${name}`} src={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
