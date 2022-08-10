const dummyData = [
  {
    id: 1,
    projectName: "Labor Plan",
    narrative: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, tempora amet.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, possimus. Ex sunt harum, impedit sint facilis ipsam eligendi nam nobis unde officia recusandae eum placeat ab! Quo, tempora amet.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="">
      <h3 className="main-section-header">Projects</h3>
      <div className="project-container">
        {dummyData.map((item) => {
          return (
            <>
              <div className="sub-project-container" key={item.id}>
                <h4 className="main-section-subHeader">{item.projectName}</h4>
                <ul className="project-list">
                  {item.narrative.map((point) => {
                    return <li>{point}</li>;
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
