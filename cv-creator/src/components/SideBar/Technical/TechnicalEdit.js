import React, { useState } from "react";

const TechnicalEdit = (props) => {
  const [enteredSkill, setSkill] = useState("");

  const technicalSkillHandler = (event) => {
    setSkill(event.target.value);
  };

  const technicalSubmitHandler = (event) => {
    event.preventDefault();
    props.saveData(enteredSkill);
    setSkill(enteredSkill);
  };
  return (
    <div className="technical-edit edit">
      <form
        action=""
        className="technical-edit-form form-container sidebar-form"
        onSubmit={technicalSubmitHandler}
      >
        <label className="form-label">Add Skill</label>
        <input
          className="form-input"
          type="text"
          onChange={technicalSkillHandler}
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

export default TechnicalEdit;
