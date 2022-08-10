import React, { useState } from "react";
import ProfessionalEdit from "./ProfessionalEdit";

const dummyData = [
  {
    id: 1,
    category: "professional",
    skill: "Problem Solving",
  },
  {
    id: 2,
    category: "professional",
    skill: "Critical Thinking",
  },
  {
    id: 3,
    category: "professional",
    skill: "Organization",
  },
  {
    id: 4,
    category: "professional",
    skill: "Adaptability",
  },
];

const Professional = () => {
  const [data, setData] = useState(dummyData);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const onSaveDataHandler = (enteredSkill) => {
    setData((data) => {
      return [enteredSkill, ...data];
    });
    console.log(enteredSkill);
  };

  const listDeleteHandler = (event) => {
    const listText = event.target.textContent;
    setData((data) =>
      data.filter((item) => {
        return item.skill !== listText;
      })
    );
  };
  return (
    <div
      className={
        !hovered
          ? "professional-container sidebar-subcontent editInactive"
          : "professional-container sidebar-subcontent editActive"
      }
    >
      <div className="skills-container">
        <h4 className="skills-header" onMouseEnter={toggleHover}>
          Professional Skills
        </h4>
        <ul className="skills-list">
          {data.map((item) => (
            <li key={item.id} onClick={listDeleteHandler}>
              {item.skill}
            </li>
          ))}
        </ul>
        <ProfessionalEdit
          saveData={onSaveDataHandler}
          toggleHover={toggleHover}
        />
      </div>
    </div>
  );
};

export default Professional;
