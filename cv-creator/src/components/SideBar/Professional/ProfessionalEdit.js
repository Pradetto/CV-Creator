import React, { useState } from "react";

const ProfessionalEdit = (props) => {
  const [enteredSkill, setSkill] = useState("");

  const professionalSkillHandler = (event) => {
    setSkill(event.target.value);
  };

  const professionalSubmitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      id: Math.random(),
      category: "professional",
      skill: enteredSkill,
    };
    props.saveData(enteredData);
    setSkill("");
  };
  return (
    <div className="professional-edit edit">
      <form
        action=""
        className="professional-edit-form form-container sidebar-form"
        onSubmit={professionalSubmitHandler}
      >
        <label className="form-label">Add Skill</label>
        <input
          className="form-input"
          type="text"
          onChange={professionalSkillHandler}
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

export default ProfessionalEdit;
