import "./Footer.css";

function Footer(props) {
  return (
    <footer id="footer">
      <ul class="footer__left">
        <li class="footer__logo">PHOING</li>
        <li>Copyright PHOING All right reserved</li>
        <li>
          <a href="#">개인정보처리방침</a>
        </li>
      </ul>
      <ul class="footer__right">
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-facebook-square"></i>
        </li>
        <li>
          <i class="fab fa-youtube-square"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
