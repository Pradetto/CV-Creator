import Title from "./Title/Title";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Education from "./Education/Education";

const ContentBody = () => {
  return (
    <div className="content-container">
      <Title />
      <Projects />
      <Work />
      <Education />
    </div>
  );
};

export default ContentBody;
