import CoursesSwiper from "../CoursesSwiper/CoursesSwiper";

const Courses = () => {
  return (
    <section className="courses">
      <h2 className="courses__slogan">
        <span>We provide training for</span>everyone
      </h2>
      <div className="courses__ctn">
        <h3 className="courses__title">
          courses<span>we offer</span>
        </h3>
        <CoursesSwiper />
      </div>
    </section>
  );
};

export default Courses;
