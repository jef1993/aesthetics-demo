const TreatmentItem = (props) => {
  return (
    <button
      className="treatments__item"
      onClick={props.onClick}
      style={{ backgroundImage: `url(${props.url})` }}
      autoFocus={props.default}
    >
      <p>{props.name}</p>
    </button>
  );
};

export default TreatmentItem;
