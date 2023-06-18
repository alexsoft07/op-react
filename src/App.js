import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Ejemplo de uso de Hooks */}
        {/* <Ejemplo1/> */}
        <Ejemplo2/>
      </header>
    </div>
  );
}

export default App;
