import React, { useState } from "react";

import treatmentData from "../../data/treatmentData";
import TreatmentItem from "./TreatmentItem";

const Treatments = () => {
  const data = treatmentData;
  const [selected, setSelected] = useState(0);

  return (
    <section className="treatments">
      <h2 className="treatments__title">
        <span>our</span>treatments
      </h2>
      <ul className="treatments__list">
        {data.map((obj, i) => (
          <TreatmentItem
            key={i}
            id={`treatment-item--1${i}`}
            name={obj.name}
            url={obj.url}
            onClick={() => {
              setSelected(i);
            }}
          />
        ))}
      </ul>
      <div className="treatments__preview">
        <img
          className="treatments__img"
          src={data[selected].url}
          alt="treatment pic"
        ></img>
      </div>

      <div className="treatments__details">
        <h3 className="treatments__name">{data[selected].name}</h3>
        {data[selected].info.map((str, i) => (
          <p className="treatments__info" key={i}>
            {str}
          </p>
        ))}
        <div className="treatments__btns">
          <button className="treatments__btn--1">Book Me In</button>
          <button className="treatments__btn--2">
            Read More On Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
