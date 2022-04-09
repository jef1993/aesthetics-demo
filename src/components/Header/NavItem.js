const NavItem = (props) => {
  return (
    <li className={`nav__item`}>
      <a className={`nav__link ${props.classes}`} href="/">
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
