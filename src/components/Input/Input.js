const Input = (props) => {
  return (
    <div className={`input ${props.component}__${props.id}`}>
      <label className="input__label" htmlFor={props.id}>
        {props.name}
      </label>
      <input className="input__box" type={props.type} id={props.id}></input>
    </div>
  );
};

export default Input;
