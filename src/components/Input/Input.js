import React, { useRef } from "react";

const Input = (props) => {
  const inputRef = useRef();

  const blurHandler = () => {
    inputRef.current.className =
      inputRef.current.value !== "" ? "input__box input__stay" : "input__box";
  };

  const focusHandler = () => {
    inputRef.current.required = true;
  };

  return (
    <div className={`input ${props.component}__${props.id}`}>
      <input
        className="input__box"
        type={props.type}
        id={props.id}
        onFocus={focusHandler}
        ref={inputRef}
        onBlur={blurHandler}
        onSubmit={() => {}}
        required={props.validate}
      ></input>
      <label className="input__label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
  );
};

export default Input;
