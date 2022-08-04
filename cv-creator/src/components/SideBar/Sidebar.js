import Profile from "./Profile/Profile";
import Technical from "./Technical/Technical";
import Personal from "./Personal/Personal";
import Professional from "./Professional/Professional";
import Contact from "./Contact/Contact";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <Technical />
      <Personal />
      <Professional />
      <Contact />
    </div>
  );
};

export default Sidebar;
