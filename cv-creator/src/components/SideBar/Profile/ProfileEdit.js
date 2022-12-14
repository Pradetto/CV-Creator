import React, { useState } from "react";

const ProfileEdit = (props) => {
  const [enteredURL, setURL] = useState("");

  const imageURLHandler = (event) => {
    setURL(event.target.value);
  };

  const imageSubmitHandler = (event) => {
    event.preventDefault();
    const imageURL = enteredURL;
    props.saveURLData(imageURL);
    setURL(enteredURL);
  };
  return (
    <div className="image-edit edit">
      <form
        action=""
        className="image-edit-form form-container sidebar-form"
        onSubmit={imageSubmitHandler}
      >
        <label className="form-label">URL</label>
        <input
          className="form-input"
          type="text"
          onChange={imageURLHandler}
          value={enteredURL}
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

export default ProfileEdit;
