import React, { useRef } from "react";

const Input = (props) => {
  const inputRef = useRef();

  const blurHandler = () => {
    inputRef.current.className =
      inputRef.current.value !== "" ? "input__box input__stay" : "input__box";
  };

  const focusHandler = () => {};

  return (
    <div className={`input ${props.component}__${props.id}`}>
      <input
        className="input__box"
        type={props.type}
        id={props.id}
        required={true}
        onFocus={focusHandler}
        ref={inputRef}
        onBlur={blurHandler}
      ></input>
      <label className="input__label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
};

export default Input;
