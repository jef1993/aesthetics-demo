import TestiSwiper from "../TestiSwiper/TestiSwiper";

const Testi = () => {
  return (
    <section className="testi">
      <div className="testi__ctn">
        <h2 className="testi__title">testimonials</h2>
        <p className="testi__content">
          Find out why so many people choose the most comfortable, complete
          experience courtesy of the Aesthetic Lounge.
        </p>
        <div className="testi__btns">
          <a href="/" className="testi__btn--1">
            Book Me In
          </a>
          <a href="/" className="testi__btn--2">
            Train With Us
          </a>
        </div>
      </div>
      <TestiSwiper />
    </section>
  );
};

export default Testi;
