import { useState } from "react";

const ProjectsEdit = (props) => {
  const [projectName, setProjectName] = useState("");
  const [narrative, setNarrative] = useState("");

  const projectHandler = (e) => {
    setProjectName(e.target.value);
  };

  const narrativeHandler = (e) => {
    setNarrative(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredData = [
      {
        id: Math.random(),
        projectName: projectName,
        narrative: [
          {
            id: Math.random(),
            text: narrative,
          },
        ],
      },
    ];

    props.saveData(enteredData);
    console.log("Passed up this data", enteredData);
    setNarrative("");
    setProjectName("");
  };

  return (
    <div className="edit-main">
      <form
        action=""
        onSubmit={submitHandler}
        className="form-container main-content-form"
      >
        <label htmlFor="" className="form-label">
          Project Name
        </label>
        <input
          type="text"
          onChange={projectHandler}
          className="form-input"
          value={projectName}
        />
        <label htmlFor="" className="form-label">
          Narrative
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="form-input"
          onChange={narrativeHandler}
          value={narrative}
        ></textarea>
        <button
          type="button"
          className="form-cancel form-button"
          onClick={props.toggleHover}
        >
          Close
        </button>
        <button
          type="submit"
          className="form-submit form-button"
          onClick={props.toggleHover}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectsEdit;
