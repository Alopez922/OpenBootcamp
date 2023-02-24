import './App.css';
import Greeting from "./components/pure/greeting"
import Fgreeting from "./components/pure/fgreeting"
import TaskListComponent from "./components/container/task_list"
import ComponenteA from './components/container/ComponenteA';

function App() {
  return (
    <div className="App">
      <header>
      {/* <Greeting name="Martin"/> */}

      {/* <Fgreeting name="Martin" /> */}
      {/* <TaskListComponent/> */}
      <ComponenteA/>
      </header>
    </div>
  );
}

export default App;
