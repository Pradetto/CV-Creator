import React, { useState } from "react";
import EducationEdit from "./EducationEdit";

const dummyData = {
  id: 1,
  projectName: "School | Grad Date",
  Major: "Business Management",
  GPA: "3.7",
  Honors: "Dean's List with Distinction, NSCS, Excellence Award",
};

const Education = () => {
  const [data, setData] = useState(dummyData);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const saveDataHandler = (newData) => {
    setData((prev) => {
      return {
        ...prev,
        id: newData.id,
        projectName: newData.projectName,
        Major: newData.Major,
        GPA: newData.GPA,
        Honors: newData.Honors,
      };
    });
  };
  return (
    <div
      className={
        !hovered
          ? "contact-container main-content-subcontent editInactive"
          : "contact-container main-content-subcontent editActive"
      }
    >
      <h3 className="main-section-header" onMouseEnter={toggleHover}>
        Educational History
      </h3>
      <div className="project-container">
        <h4 className="main-section-subHeader">{data.projectName}</h4>
        <ul className="project-list" id="education-list" key={data.id}>
          <li className="">
            <span className="bold">Major: </span>
            {data.Major}
          </li>
          <li className="">
            <span className="bold">GPA: </span>
            {data.GPA}
          </li>
          <li className="">
            <span className="bold">Honors: </span>
            {data.Honors}
          </li>
        </ul>
      </div>
      <EducationEdit saveData={saveDataHandler} toggleHover={toggleHover} />
    </div>
  );
};

export default Education;
