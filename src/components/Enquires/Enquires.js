import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";

const Enquires = () => {
  const [validate, setValidate] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setValidate(true);
  };
  return (
    <section className="enquires">
      <h2 className="enquires__title">
        <strong>enquire</strong>about our services
      </h2>
      <form className="enquires__form" onSubmit={submitHandler}>
        <Input
          component="enquires"
          type="text"
          name="First name"
          id="fName"
          validate={validate}
        />
        <Input
          component="enquires"
          type="text"
          name="Last name"
          id="lName"
          validate={validate}
        />
        <Input
          component="enquires"
          type="tel"
          name="Contact number"
          id="contact"
          validate={validate}
        />
        <Input
          component="enquires"
          type="email"
          name="Email address"
          id="email"
          validate={validate}
        />
        <Input
          component="enquires"
          type="text"
          name="Subject"
          id="subject"
          validate={validate}
        />
        <TextArea
          component="enquires"
          name="Message"
          id="message"
          validate={validate}
        />
        <div className="enquires__submit">
          <button type="submit" className="enquires__btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Enquires;
