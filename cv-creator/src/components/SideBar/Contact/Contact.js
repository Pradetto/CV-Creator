import { useState } from "react";
import ContactEdit from "./ContactEdit";

const dummyData = [
  {
    id: 1,
    email: "you@email.com",
    phone: "888-888-8888",
    location: "Phoenix, AZ",
  },
];

const Contact = () => {
  const [data, setData] = useState(dummyData);
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);

  const saveDataHandler = (info) => {
    setData(info);
  };

  const listDeleteHandler = () => {
    setData(dummyData);
  };

  // const keyPressHandler = (e) => {
  //   if (e.target.charCode === 73) {
  //     console.log(`You pressed ${e.charCode}`);
  //     toggleHover();
  //   }
  // };
  return (
    <div
      className={
        !hovered
          ? "contact-container sidebar-subcontent editInactive"
          : "contact-container sidebar-subcontent editActive"
      }
    >
      <div className="skills-container">
        <h4 className="skills-header" onMouseEnter={toggleHover}>
          Contact Information
        </h4>
        <ul className="skills-list" onClick={listDeleteHandler}>
          {data.map((item) => {
            return (
              <li key={item.id} onClick={listDeleteHandler}>
                {item.email}
              </li>
            );
          })}
          {data.map((item) => {
            return (
              <li key={item.id} onClick={listDeleteHandler}>
                {item.phone}
              </li>
            );
          })}
          {data.map((item) => {
            return (
              <li key={item.id} onClick={listDeleteHandler}>
                {item.location}
              </li>
            );
          })}
        </ul>
        <ContactEdit saveData={saveDataHandler} toggleHover={toggleHover} />
      </div>
    </div>
  );
};

export default Contact;

//           {
//             /* I do not like the multiple map calls possibly look into something called fragments*/
//           }
