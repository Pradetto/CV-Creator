import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import ContentBody from "./components/ContentBody/ContentBody";

function App() {
  return (
    <div className="App">
      <div className="cv-container">
        <Sidebar />
        <ContentBody />
      </div>
    </div>
  );
}

export default App;
