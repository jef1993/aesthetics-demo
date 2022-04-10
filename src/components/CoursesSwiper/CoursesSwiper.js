import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./coursesSwiper.scss";

import coursesData from "../../data/coursesData";

import { Pagination, Navigation } from "swiper";

function CoursesSwiper(props) {
  const data = coursesData;
  return (
    <>
      <div className={"swiper-ctn"}>
        <Swiper
          pagination={true}
          navigation={true}
          slidesPerView={3}
          spaceBetween={0}
          modules={[Pagination, Navigation]}
          className={`courses__swiper`}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CoursesSwiper;
