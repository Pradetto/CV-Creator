import React, { useState } from "react";
import ProjectsEdit from "./ProjectsEdit";

const dummyData = [
  {
    id: 1,
    projectName: "Labor Plan",
    narrative: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, ",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, tempora amet.",
      },
    ],
  },
  {
    id: 2,
    projectName: "React Project",
    narrative: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia t.",
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, tempora amet.",
      },
    ],
  },
];

const Projects = () => {
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
        Projects
      </h3>
      <div className="project-container">
        {data.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <div className="sub-project-container">
                <h4 className="main-section-subHeader">{item.projectName}</h4>
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
      <ProjectsEdit saveData={saveDataHandler} toggleHover={toggleHover} />
    </div>
  );
};

export default Projects;

// Another working version
// const saveDataHandler = (newData) => {
//   const target = [...data];
//   const existedProjectIdx = target.findIndex(
//     (item) => item.projectName === newData.projectName
//   );

//   // if not find, 'existedProjectIndex' will be -1
//   if (existedProjectIdx !== -1) {
//     const { narrative } = target[existedProjectIdx];
//     target[existedProjectIdx].narrative = [
//       ...narrative,
//       ...newData.narrative,
//     ];
//   } else {
//     target.push(newData);
//   }

//   setData(target);
// };

// console.log("received");
// console.log(data);
// for (const item of data) {
//   if (item.projectName === newData[0].projectName) {
//     return [item.narrative.push(newData.narrative)];
//   }
// }
// console.log(data);
// return;

// for (const item of prevData) {
//   if  {
//     return [item.narrative.push(newData.narrative)];
//   }
// }
// prevData.forEach((item, index) => {
//   if (item.projectName === newData[0].projectName) {
//     const dataObj = newData[0].narrative;
//     item.narrative = [...item.narrative, dataObj];
//     console.log(item.narrative);
//     return dummyData;
//   } else {
//     console.log([newData, ...prevData]);
//     return dummyData;
//   }
// });
// prevData.forEach((item, index) => {
//   if (item.projectName === newData[0].projectName) {
//     const dataObj = newData[0].narrative;
//     item.narrative = [...item.narrative, dataObj];
//     console.log(item.narrative);
//     return dummyData;
//   }
// for (let i = 0; i < prevData.length; i++) {
//   console.log(prevData[i]);
//   // if (item.projectName === newData[0].projectName) {
//   //   item.narrative = [...item.narrative, newData[0].narrative];
//   //   return item;
//   // }

// }
