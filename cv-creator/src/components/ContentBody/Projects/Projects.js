import React, { useState } from "react";
import ProjectsEdit from "./ProjectsEdit";

const dummyData = [
  {
    id: 1,
    projectName: "Labor Plan",
    narrative: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, tempora amet.",
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
    console.log("Received data", newData);
    setData((prevData) => {
      console.log("this is the previous data", prevData);
      let ans = null;
      ans = prevData.filter((item) => {
        if (item.projectName === newData[0].projectName) {
          return item;
        }
      });

      if (ans.length > 0) {
        console.log("This is the answer I am using");
        return ans;
      } else {
        return [...newData, ...prevData];
      }
    });
    console.log("Should be new updated Data", data);
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
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="sub-project-container">
                <h4 className="main-section-subHeader">{item.projectName}</h4>
                <ul className="project-list" key={item.id}>
                  {item.narrative.map((point) => {
                    return <li key={point.id}>{point.text}</li>;
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
