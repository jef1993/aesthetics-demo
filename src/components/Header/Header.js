import NavItem from "./NavItem";
import logo from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a className="header__home" href="/">
        <img className="header__logo" src={logo} alt="home logo"></img>
      </a>
      <nav className="nav">
        <ul className="nav__list">
          <NavItem name="home" classes="nav__current" />
          <NavItem name="training academy" />
          <NavItem name="our treatments" />
          <NavItem name="about us" />
          <NavItem name="models" />
          <NavItem name="testimonials" />
        </ul>
        <div className="nav__ctn">
          <a className="nav__link" href="/">
            FAQs
          </a>
          <a className="nav__link" href="/">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
