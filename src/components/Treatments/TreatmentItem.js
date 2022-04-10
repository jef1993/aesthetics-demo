const TreatmentItem = (props) => {
  return (
    <button
      className="treatments__item"
      onClick={props.onClick}
      style={{ backgroundImage: `url(${props.url})` }}
    >
      <p>{props.name}</p>
    </button>
  );
};

export default TreatmentItem;
