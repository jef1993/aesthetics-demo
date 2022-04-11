const ShowcaseLink = (props) => {
  return (
    <a
      className="showcase__link"
      href="https://www.instagram.com"
      target="_blank"
      rel="noreferrer"
    >
      <img className="showcase__img" src={props.img} alt="Showcase-img"></img>
      <div></div>
    </a>
  );
};

export default ShowcaseLink;
