import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper from "./testiswiper.module.scss";
import "./testiswiper.scss";
import TestiCard from "../Testi/TestiCard";

// import required modules
import { Pagination, Autoplay } from "swiper";

function TestiSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`testi__swiper`}
      >
        <SwiperSlide>
          <TestiCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestiCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestiCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TestiSwiper;
