import logo from "../../assets/icons/logo.png";
import opop from "../../assets/icons/opop.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__ctn">
        <ul className="footer__nav--1">
          <li className="footer__item">
            <a href="/">Home</a>
          </li>
          <li className="footer__item">
            <a href="/">Training Academy</a>
          </li>
          <li className="footer__item">
            <a href="/">Our treatments</a>
          </li>
          <li className="footer__item">
            <a href="/">About us</a>
          </li>
          <li className="footer__item">
            <a href="/">Models</a>
          </li>
          <li className="footer__item">
            <a href="/">Testimonials</a>
          </li>
        </ul>
        <ul className="footer__nav--2">
          <li className="footer__item">
            <a href="/">FAQs</a>
          </li>
          <li className="footer__item">
            <a href="/">Contact us</a>
          </li>
        </ul>
        <ul className="footer__socials">
          <a
            className="footer__link"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__icon" src={instagram} alt="instagram"></img>
            <div className="footer__shadow"></div>
          </a>
          <a
            className="footer__link"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__icon" src={twitter} alt="twitter"></img>
            <div className="footer__shadow"></div>
          </a>
          <a
            className="footer__link"
            id="twitter"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__icon" src={facebook} alt="facebook"></img>
            <div className="footer__shadow"></div>
          </a>
        </ul>
        <img className="footer__logo" alt="logo" src={logo}></img>
        <div className="footer__bottom">
          <div className="footer__dev">
            Developed by |
            <a
              className="footer__dev--link"
              href="https://opopmedia.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__dev--icon"
                alt="dev-icon"
                src={opop}
              ></img>
            </a>
          </div>
          <div className="footer__copyright">
            &copy; Copyright {new Date().getFullYear()}
          </div>
          <ul className="footer__policies">
            <li className="footer__policy">
              <a href="/">Cookie Policy</a>
            </li>
            <li className="footer__policy">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer__policy">
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
