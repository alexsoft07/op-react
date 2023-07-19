import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {


    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modufied');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount');
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //We update the state of the component whith the new list of tasks and it will update the//
        //Iteraction of the tasks in order to show the task completed//
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1)
        setTasks(tempTasks);
    }

    function addTask(task) {
        console.log('Add this Task', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scdollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/** TODO: Aplicar un for / Map para renderizar una lista */}
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                        >
                                        </TaskComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};

export default TaskListComponent;
