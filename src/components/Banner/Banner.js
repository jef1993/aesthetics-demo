const Banner = () => {
  return (
    <section className="banner">
      <h1 className="banner__title heading">
        Aesthetics<span>you can trust.</span>
      </h1>
      <p className="banner__content">
        Delivering world-class cosmetic services and aesthetics training to help
        enhance the natural beauty within.
      </p>
      <div className="banner__btns">
        <button className="banner__btn banner__btn--1">Book Me In</button>
        <button className="banner__btn banner__btn--2">Train With Us</button>
      </div>
    </section>
  );
};

export default Banner;
