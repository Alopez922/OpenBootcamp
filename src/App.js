import './App.css';
import Greeting from "./components/pure/greeting"
import Fgreeting from "./components/pure/fgreeting"
import TaskListComponent from "./components/container/task_list"
import ComponenteA from './components/container/ComponenteA';
import Ejemplo1  from './hooks/Ejemplo1';
import Ejemplo2  from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';


function App() {
  return (
    <div className="App">
      <header>
      {/* <Greeting name="Martin"/> */}

      {/* <Fgreeting name="Martin" /> */}
      {/* <TaskListComponent/> */}
      {/* <ComponenteA/> */}
      {/* Ejemplo de uso de Hooks */}
      {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        <Ejemplo4 nombre="Martin">
            <h3>
              Contenido del props.children
            </h3>
        </Ejemplo4>

      </header>
    </div>
  );
}

export default App;
