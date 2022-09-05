import ShowcaseLink from "./ShowcaseLink";
import showcase1 from "../../assets/img/showcase/showcase-1.jpg";
import showcase2 from "../../assets/img/showcase/showcase-2.jpg";
import showcase3 from "../../assets/img/showcase/showcase-3.jpg";
import showcase4 from "../../assets/img/showcase/showcase-4.jpg";

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
        <ShowcaseLink img={showcase1} />
        <ShowcaseLink img={showcase2} />
        <ShowcaseLink img={showcase3} />
        <ShowcaseLink img={showcase4} />
      </div>
    </section>
  );
};

export default Showcase;
