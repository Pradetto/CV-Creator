import React, { useState } from "react";

const PersonalEdit = (props) => {
  const [enteredSkill, setSkill] = useState("");

  const personalSkillHandler = (event) => {
    setSkill(event.target.value);
  };

  const personalSubmitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      id: Math.random(),
      category: "personal",
      skill: enteredSkill,
    };
    props.saveData(enteredData);
    setSkill("");
  };
  return (
    <div className="personal-edit edit">
      <form
        action=""
        className="personal-edit-form form-container sidebar-form"
        onSubmit={personalSubmitHandler}
      >
        <label className="form-label">Add Skill</label>
        <input
          className="form-input"
          type="text"
          onChange={personalSkillHandler}
          value={enteredSkill}
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

export default PersonalEdit;
