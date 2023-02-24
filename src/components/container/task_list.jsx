import React from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task';

const TasklistComponent = () => {

    const defaultTask = new Task('Example','Default description', false , LEVELS.NORMAL);
  
    const changeState=(id)=>{
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
