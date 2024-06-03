import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Redux"];
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
