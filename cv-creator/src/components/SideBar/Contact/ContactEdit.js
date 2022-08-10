import React, { useState } from "react";

const ContactEdit = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPhone, setPhone] = useState("");
  const [enteredLocation, setLocation] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const locationHandler = (event) => {
    setLocation(event.target.value);
  };

  const contactSubmitHandler = (event) => {
    event.preventDefault();

    const enteredData = [
      {
        id: Math.random(),
        email: enteredEmail,
        phone: enteredPhone,
        location: enteredLocation,
      },
    ];
    props.saveData(enteredData);
    setEmail("");
    setPhone("");
    setLocation("");
  };
  return (
    <div className="professional-edit edit">
      <form
        action=""
        className="professional-edit-form form-container sidebar-form"
        onSubmit={contactSubmitHandler}
      >
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="text"
          onChange={emailHandler}
          value={enteredEmail}
        />
        <label className="form-label">Phone</label>
        <input
          className="form-input"
          type="text"
          onChange={phoneHandler}
          value={enteredPhone}
        />
        <label className="form-label">Location</label>
        <input
          className="form-input"
          type="text"
          onChange={locationHandler}
          value={enteredLocation}
        />
        <div className="form-button-container">
          <button
            className="form-cancel form-button"
            type="button"
            onClick={props.toggleHover}
          >
            Close
          </button>
          <button
            className="form-submit form-button"
            type="submit"
            onClick={props.toggleHover}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactEdit;
