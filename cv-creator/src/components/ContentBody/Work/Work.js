import React, { useState } from "react";
import WorkEdit from "./WorkEdit";

const dummyData = [
  {
    id: 1,
    projectName: "Company | Position | Date",
    narrative: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      },
    ],
  },
  {
    id: 2,
    projectName: "LGSTX | Business Analyst | June 2019 - Present",
    narrative: [
      {
        id: 1,
        text: "I love work :)",
      },
      {
        id: 2,
        text: "Saved XXX amount of money by doing xyz",
      },
    ],
  },
];

const Work = () => {
  const [data, setData] = useState(dummyData);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const saveDataHandler = (newData) => {
    setData((prev) => {
      const foundIndex = prev.findIndex(
        ({ projectName }) => projectName === newData[0].projectName
      );
      if (foundIndex === -1) {
        return [newData, ...prev]; // not found, just prepend
      }

      // return a new array with a new, modified element at position `foundIndex`
      return [
        ...prev.slice(0, foundIndex),
        {
          ...prev[foundIndex],
          narrative: [...prev[foundIndex].narrative, ...newData[0].narrative],
        },
        ...prev.slice(foundIndex + 1),
      ];
    });
  };

  const topicDeleteHandler = (e) => {
    const text = e.target.textContent;
    setData((prev) => {
      return prev.filter((item) => {
        return item.projectName !== text;
      });
    });
  };
  const listDeleteHandler = (e) => {
    const dataIndex = Number(e.target.className);
    const text = e.target.textContent;
    setData((prev) => {
      let ans = prev[dataIndex].narrative.filter((item) => {
        return item.text !== text;
      });

      return [
        ...prev.slice(0, dataIndex),
        {
          ...prev[dataIndex],
          narrative: [...ans],
        },
        ...prev.slice(dataIndex + 1),
      ];
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
        Work
      </h3>
      <div className="project-container">
        {data.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <div className="sub-project-container">
                <h4
                  className="main-section-subHeader"
                  onClick={topicDeleteHandler}
                >
                  {item.projectName}
                </h4>
                <ul className="project-list" key={item.id}>
                  {item.narrative.map((point) => {
                    return (
                      <li
                        key={point.id}
                        className={index}
                        onClick={listDeleteHandler}
                      >
                        {point.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <WorkEdit saveData={saveDataHandler} toggleHover={toggleHover} />
    </div>
  );
};

export default Work;
