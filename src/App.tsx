import './App.css';
import { Skills } from './components/skills/skills';

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Redux"];
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
