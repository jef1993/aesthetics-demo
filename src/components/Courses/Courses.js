import CoursesSwiper from "../CoursesSwiper/CoursesSwiper";

const Courses = () => {
  return (
    <section className="courses">
      <h2 className="courses__slogan">
        <span>We provide training for</span>everyone
      </h2>
      <h3 className="courses__title">
        courses<span>we offer</span>
      </h3>
      <CoursesSwiper>
        
      </CoursesSwiper>
    </section>
  );
};

export default Courses;
