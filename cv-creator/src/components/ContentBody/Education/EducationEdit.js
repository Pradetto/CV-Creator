import { useState } from "react";

const EducationEdit = (props) => {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGPA] = useState("");
  const [honors, setHonors] = useState("");

  const schoolHandler = (e) => {
    setSchoolName(e.target.value);
  };

  const majorHandler = (e) => {
    setMajor(e.target.value);
  };

  const gpaHandler = (e) => {
    setGPA(e.target.value);
  };

  const honorsHandler = (e) => {
    setHonors(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      id: Math.random(),
      projectName: schoolName,
      Major: major,
      GPA: gpa,
      Honors: honors,
    };

    props.saveData(enteredData);
    setSchoolName("");
    setMajor("");
    setGPA("");
    setHonors("");
  };

  return (
    <div className="edit-main">
      <form
        action=""
        onSubmit={submitHandler}
        className="form-container main-content-form"
      >
        <label htmlFor="" className="form-label">
          School Name and Date Graduated
        </label>
        <input
          type="text"
          onChange={schoolHandler}
          className="form-input"
          value={schoolName}
        />
        <label htmlFor="" className="form-label">
          Major
        </label>
        <input
          type="text"
          onChange={majorHandler}
          className="form-input"
          value={major}
        />
        <label htmlFor="" className="form-label">
          GPA
        </label>
        <input
          type="text"
          onChange={gpaHandler}
          className="form-input"
          value={gpa}
        />
        <label htmlFor="" className="form-label">
          Honors
        </label>
        <input
          type="text"
          onChange={honorsHandler}
          className="form-input"
          value={honors}
        />
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

export default EducationEdit;
