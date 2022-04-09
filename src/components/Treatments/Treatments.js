const Treatments = () => {
  return (
    <section className="treatments heading">
      <h2 className="treatments__title">
        <span>our</span>treatments
      </h2>
      <div className="treatments__ctn">
        <ul className="treatments__list">
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
          <button className="treatments__item">
            <p>Lip Filler</p>
          </button>
        </ul>
        <img
          className="treatment__img"
          src="https://theaestheticlounge.co.uk/static/media/01.9447976b.png"
          alt="treatment pic"
        ></img>
        <div className="treatments__details">
          <h3 className="treatments__name">Lip Filler</h3>
          <p className="treatments__info">{`If you’re looking for more sumptuous lips and a perfect pout, then lip filler augmentations are perfect for you.

Designed to restore and enhance the shape and volume of your lips, lip fillers are an incredibly popular option for both younger and older individuals. Our bespoke treatment is entirely safe, allowing you to have the lips you desire.`}</p>
          <div className="treatments__btns">
            <button className="treatments__btn--1">Book Me In</button>
            <button className="treatments__btn--2">
              Read More On Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
