import React, { useState } from "react";
import PersonalEdit from "./PersonalEdit";

const dummyData = [
  {
    id: 1,
    category: "personal",
    skill: "Problem Solving",
  },
  {
    id: 2,
    category: "personal",
    skill: "Critical Thinking",
  },
  {
    id: 3,
    category: "personal",
    skill: "Organization",
  },
  {
    id: 4,
    category: "personal",
    skill: "Adaptability",
  },
];

const Personal = () => {
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
          ? "personal-container sidebar-subcontent editInactive"
          : "personal-container sidebar-subcontent editActive"
      }
      onMouseEnter={toggleHover}
    >
      <div className="skills-container">
        <h4 className="skills-header">Personal Skills</h4>
        <ul className="skills-list">
          {data.map((item) => (
            <li key={item.id} id={item.id} onClick={listDeleteHandler}>
              {item.skill}
            </li>
          ))}
        </ul>
        <PersonalEdit saveData={onSaveDataHandler} toggleHover={toggleHover} />
      </div>
    </div>
  );
};
export default Personal;
