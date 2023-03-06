import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task';

const TasklistComponent = () => {

    const defaultTask = new Task('Example','Default description', false , LEVELS.NORMAL);
    //Estado del componente
    const [tasks,setTasks] = useState([defaultTask])

    //Control del ciclo de vida del componente

    useEffect(() => {
      console.log('Task State has been modified')
    
      return () => {
      console.log('TaskList component is going to unmount')
    }
    }, [])
    


    const changeCompleted=(id)=>{
        console.log('CAMBIAR ESTADO DE UNA TAREA')
    }

    return (
    <div>
        <div>
            <h1>
                Your Task: 
            </h1>
            {/* Aplicar un FOR/MAP para renderizar una lista */}
            <TaskComponent task={defaultTask}/>

        </div>
    </div>
  )
}

export default TasklistComponent
