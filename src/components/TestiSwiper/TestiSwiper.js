import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper from "./testiswiper.module.scss";
import "./testiswiper.scss";
import TestiCard from "../Testi/TestiCard";
import testiData from "../../data/testiData";

// import required modules
import { Pagination, Autoplay } from "swiper";

function TestiSwiper(props) {
  const data = testiData;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`testi__swiper`}
      >
        {data.map((obj, i) => (
          <SwiperSlide key={i}>
            <TestiCard
              key={i}
              title={obj.title}
              comment={obj.comment}
              name={obj.name}
              id={i + 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default TestiSwiper;
