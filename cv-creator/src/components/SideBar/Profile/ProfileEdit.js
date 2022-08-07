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
    setURL("URL");
  };
  return (
    <div className="image-edit edit">
      <form action="" className="image-edit-form" onSubmit={imageSubmitHandler}>
        <label>URL</label>
        <input type="text" onChange={imageURLHandler} value={enteredURL} />
        <button type="button" onClick={props.toggleHover}>
          Close
        </button>
        <button type="submit" onClick={props.toggleHover}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
