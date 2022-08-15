import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import ContentBody from "./components/ContentBody/ContentBody";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="App">
      <div className="app-instructions">
        <h1 className="app-header">Free CV Creator</h1>
        <Instructions />
        <h6>Created By: Michael Pradetto</h6>
      </div>
      <div className="cv-container">
        <Sidebar />
        <ContentBody />
      </div>
    </div>
  );
}

export default App;
