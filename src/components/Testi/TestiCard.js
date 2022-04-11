const TestiCard = (props) => {
  return (
    <div className="testi-card">
      <h3 className="testi-card__title">“{props.title}”</h3>
      <p className="testi-card__comment">{props.comment}</p>
      <div className="testi-card__bottom">
        <div className="testi-card__person">
          <img
            className="testi-card__icon"
            src={`img/person-${props.id}.png`}
            alt="icon"
          ></img>
          <span>{props.name}</span>
        </div>
        <img
          className="testi-card__rating"
          src="https://theaestheticlounge.co.uk/static/media/rating.9f06273a.svg"
          alt="rating"
        ></img>
      </div>
    </div>
  );
};

export default TestiCard;
