import React, {useContext} from "react";
import './Task.css'
import TaskIdContext from "../../context/taskId-context";

function Task({task}) {

    const contextData = useContext(TaskIdContext)

    const onCompletion = () => {
        contextData.toggleTaskCompletion(task.id)}
    return (
        <div className='task-wrapper'>
            <div className='task__content_wrapper'>
                <h2>
                    {task.title}
                </h2>
                <p>
                    {task.description}
                </p>
            </div>
            <div className="task__button_wrapper">
                {(task.isCompleted && <span className='completed'>Завершена</span>)
                    || <button type='button' className='button' onClick={onCompletion}>Завершить</button>}
            </div>
        </div>
    )
 }


export default Task;