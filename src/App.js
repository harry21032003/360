import Scene from './components/scena';
import RotateWarning from './components/RotateWarning';   // <-- importa el nuevo componente
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <RotateWarning />      {/* <-- aquí lo insertas */}
      <Scene />
    </div>
  );
}

export default App;

