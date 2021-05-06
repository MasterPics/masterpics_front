import { Link } from "react-router-dom";
import "../css/module/AboutUsMainContent.css";

function AboutUsMainContent({ title, desc, link }) {
  return (
    <div className="AboutUsMainContent">
      <div className="container">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <Link className="link" to={link}>
          바로가기
        </Link>
      </div>
    </div>
  );
}

export default AboutUsMainContent;
