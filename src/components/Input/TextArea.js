import React, { useRef } from "react";
const TextArea = (props) => {
  const inputRef = useRef();

  const blurHandler = () => {
    inputRef.current.className =
      inputRef.current.value !== ""
        ? "textbox__box textbox__stay"
        : "textbox__box";
  };
  return (
    <div className={`textbox ${props.component}__${props.id}`}>
      <textarea
        onBlur={blurHandler}
        className="textbox__box"
        id={`${props.id}`}
        ref={inputRef}
      ></textarea>
      <label className="input textbox__label" htmlFor={`${props.id}`}>
        {props.name}
      </label>
    </div>
  );
};

export default TextArea;
