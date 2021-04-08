import "../css/router/Footer.css";

function Footer(props) {
  return (
    <footer id="footer">
      <ul className="footer__left">
        <li className="footer__logo">PHOING</li>
        <li>Copyright PHOING All right reserved</li>
        <li>
          <a href="/">개인정보처리방침</a>
        </li>
      </ul>
      <ul className="footer__right">
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-facebook-square"></i>
        </li>
        <li>
          <i className="fab fa-youtube-square"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
