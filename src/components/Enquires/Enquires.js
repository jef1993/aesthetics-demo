import Input from "../Input/Input";

const Enquires = () => {
  const submitHandler = () => {};
  return (
    <section className="enquires">
      <h2 className="enquires__title">
        enquire<span>about our services</span>
      </h2>
      <form className="enquires__form" onSubmit={submitHandler}>
        <Input component="enquires" type="text" name="First name" id="fName" />
        <Input component="enquires" type="text" name="Last Name" id="lName" />
        <Input
          component="enquires"
          type="tel"
          name="Contact number"
          id="contact"
        />
        <Input
          component="enquires"
          type="email"
          name="Email address"
          id="email"
        />
        <Input component="enquires" type="text" name="Subject" id="subject" />
        <div className="enquires__message">
          <label className="input enquires__label" htmlFor="message">
            Message
          </label>
          <textarea className="textbox" id="message"></textarea>
        </div>
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
