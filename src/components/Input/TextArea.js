import React, { useRef } from "react";
const TextArea = (props) => {
  const inputRef = useRef();

  const changeHandler = () => {
    inputRef.current.className =
      inputRef.current.value !== ""
        ? "textbox__box textbox__stay"
        : "textbox__box";
  };

  const focusHandler = () => {
    inputRef.current.required = true;
  
  };
  return (
    <div className={`textbox ${props.component}__${props.id}`}>
      <textarea
        onChange={changeHandler}
        className="textbox__box"
        id={`${props.id}`}
        ref={inputRef}
        onFocus={focusHandler}
        required={props.validate}
      ></textarea>
      <label className="input textbox__label" htmlFor={`${props.id}`}>
        {props.name}
      </label>
    </div>
  );
};

export default TextArea;
