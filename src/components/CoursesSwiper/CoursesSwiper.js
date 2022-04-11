import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./coursesSwiper.scss";

import coursesData from "../../data/coursesData";
import CourseCard from "../Courses/CourseCard";

import { Pagination, Navigation } from "swiper";

function CoursesSwiper(props) {
  const [chosen, setChosen] = useState(null);
  const data = coursesData;

  // const getChosenClass = (name) => {
  //   name === chosen ? ``
  // };

  useEffect(() => {});

  const chosenHandler = (name) => {
    setChosen(name === chosen ? null : name);
  };

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
          {data.map((obj, i) => (
            <SwiperSlide key={i}>
              <CourseCard
                key={i}
                name={obj.name}
                info={obj.info}
                url={obj.url}
                onChosen={() => {
                  chosenHandler(obj.name);
                }}
                chosenClass={obj.name === chosen ? `chosen` : ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CoursesSwiper;
