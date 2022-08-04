import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Education from "./Education/Education";

const ContentBody = () => {
  return (
    <div className="content-container">
      <Header />
      <Projects />
      <Work />
      <Education />
    </div>
  );
};

export default ContentBody;
