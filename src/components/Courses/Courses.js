import CoursesSwiper from "../CoursesSwiper/CoursesSwiper";

const Courses = () => {
  return (
    <section className="courses">
      <h2 className="courses__slogan">
        We provide training for<strong>everyone</strong>
      </h2>
      <div className="courses__ctn">
        <h3 className="courses__title">
          <strong>we offer</strong>courses
        </h3>
        <CoursesSwiper />
      </div>
    </section>
  );
};

export default Courses;
