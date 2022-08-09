import { useState } from "react";
import TechnicalEdit from "./TechnicalEdit";

const dummyData = [
  {
    id: 1,
    category: "technical",
    skill: "Javascript",
  },
  {
    id: 2,
    category: "technical",
    skill: "Python",
  },
  {
    id: 3,
    category: "technical",
    skill: "Django",
  },
  {
    id: 4,
    category: "technical",
    skill: "React",
  },
];

const Technical = () => {
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
          ? "technical-container sidebar-subcontent editInactive"
          : "technical-container sidebar-subcontent editActive"
      }
      onMouseEnter={toggleHover}
    >
      <div className="skills-container">
        <h4 className="skills-header">Technical Skills</h4>
        <ul className="skills-list">
          {data.map((item) => (
            <li key={item.id} id={item.id} onClick={listDeleteHandler}>
              {item.skill}
            </li>
          ))}
        </ul>
        <TechnicalEdit saveData={onSaveDataHandler} toggleHover={toggleHover} />
      </div>
    </div>
  );
};

export default Technical;

// {
//   data.map((skill) => (
//     <TechnicalEdit
//       saveData={onSaveDataHandler}
//       toggleHover={toggleHover}
//       key={skill.id}
//       category={skill.category}
//       skill={skill.skill}
//     />
//   ));
// }
