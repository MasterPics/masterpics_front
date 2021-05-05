import { Link } from "react-router-dom";
import "../css/module/AboutUsMainContent.css";

function AboutUsMainContent({ main, example, link }) {
    return (
        <div className="circle">
            <div className="main">
                <div className="main-work">{main}</div>
                <div className="main-work-ex">{example}</div>
                <Link className="link" to={link}>바로가기</Link>
            </div>
        </div>
    )
}

export default AboutUsMainContent;