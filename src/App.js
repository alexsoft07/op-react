/* import logo from './logo.svg'; */
import './App.css';
/* import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2'; */
/* import Ejemplo3 from './hooks/Ejemplo3'; */
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyles from './components/pure/greetingStyles';
import Clock from './hooks/Clock';
import ClockEjersicio from './hooks/ClockEjersicio';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/*< img src={logo} className="App-logo" alt="logo" /> */}
        {/** Ejemplo de uso de Hooks */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 name='Alexander'>
          <h3>Contenido del children</h3>
        </Ejemplo4> */}
        
        {/* <GreetingStyles name="Alexander"></GreetingStyles> */}
        {/* <Clock></Clock> */}
        {/* <ClockEjersicio name="Alex" last="Torres"></ClockEjersicio> */}
      {/* </div></header> */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
