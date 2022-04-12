import ShowcaseLink from "./ShowcaseLink";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase__heading">
        <h2 className="showcase__title">
          don't just take<strong>our word for it</strong>
        </h2>
        <p className="showcase__content">
          Here’s just a few of the people who have been given the complete,
          perfect look thanks to the Aesthetic Lounge.
        </p>
      </div>

      <div className="showcase__ctn">
        <ShowcaseLink img="https://theaestheticlounge.co.uk/static/media/01.35c7e087.png" />
        <ShowcaseLink img="https://theaestheticlounge.co.uk/static/media/02.809a80cb.png" />
        <ShowcaseLink img="https://theaestheticlounge.co.uk/static/media/03.a2f381b8.png" />
        <ShowcaseLink img="https://theaestheticlounge.co.uk/static/media/04.9c97650e.png" />
      </div>
    </section>
  );
};

export default Showcase;
