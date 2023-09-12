import React from "react";
import Card from "./UI/Card/Card";
import Task from "./Task/Task";


function TasksWrapper({userTasks}) {
    return (
        <>
            {
                userTasks.map(task => (
                <Card className='home'>
                    <Task task={task} key={task.id}/>
                </Card>))
            }
        </>
    )
}

export default TasksWrapper;