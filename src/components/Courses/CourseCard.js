import React, { useState } from "react";

const CourseCard = (props) => {
  // const chosenHandler = () => {
  //   props.onChosen(props.name);
  // };

  return (
    <div
      className={`course ${props.chosenClass}`}
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <button
        className={`course__btn ${props.chosenClass}`}
        onClick={props.onChosen}
      >
        <div>&minus;</div>
      </button>
      <div className={`course__ctn `}>
        <h4 className="course__name">{props.name}</h4>
        <span className="course__line"></span>

        <div className="course__info">
          {props.info.map((str, i) => (
            <p key={i}>{str}</p>
          ))}
        </div>
        <a className="course__link" href="/">
          View Course
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
