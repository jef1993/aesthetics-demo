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
            <img
              className="footer__icon"
              src="https://theaestheticlounge.co.uk/static/media/instagram.25a940a7.svg"
              alt="instagram"
            ></img>
            <div className="footer__shadow"></div>
          </a>
          <a
            className="footer__link"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon"
              src="https://theaestheticlounge.co.uk/static/media/twitter.e64963e8.svg"
              alt="twitter"
            ></img>
            <div className="footer__shadow"></div>
          </a>
          <a
            className="footer__link"
            id="twitter"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon"
              src="https://theaestheticlounge.co.uk/static/media/facebook.910d39b4.svg"
              alt="facebook"
            ></img>
            <div className="footer__shadow"></div>
          </a>
        </ul>
        <img
          className="footer__logo"
          alt="logo"
          src="https://theaestheticlounge.co.uk/static/media/footer-logo.606161eb.png"
        ></img>
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
                src="https://theaestheticlounge.co.uk/static/media/logo-opop.d880cbdf.svg"
              ></img>
              <strong>OPOP</strong>
              media
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
