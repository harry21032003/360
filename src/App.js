import Scene from './components/scena';
import RotateWarning from './components/RotateWarning';   
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <RotateWarning />   
      <Scene />
    </div>
  );
}

export default App;

