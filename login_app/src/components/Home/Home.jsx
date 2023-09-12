/* eslint-disable react/jsx-no-constructed-context-values */

import React, {useEffect, useState} from 'react';

import Card from '../UI/Card/Card';
import './Home.css';
import ModalForm from "../UI/ModalForm/ModalForm";
import TasksWrapper from "../TasksWrapper";
import TaskIdContext from "../../context/taskId-context";

function Home() {
    const [userTasks, setUserTasks] = useState({})
    const [modalToggle, setModalToggle] = useState(false)

    const modalHandler = () => {
        setModalToggle(!modalToggle)
    }

    const updateLocalTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(userTasks))
    }

    const toggleTaskCompletion = (taskId) => {
        const updatedUserTask = {}
        updatedUserTask[taskId] = {...userTasks[taskId]}
        updatedUserTask[taskId].isCompleted = true
        setUserTasks({...userTasks, ...updatedUserTask})
    }

    const parseStringJSONTask = (stringedTask) => JSON.parse(stringedTask)

    const getCurrentUserTasks = () => {
        const rawTasks = localStorage.getItem('tasks')
        const tasks = parseStringJSONTask(rawTasks)
        setUserTasks(tasks || [])
    }
    const createNewTask = (title, description) => {
        const taskId = Math.random().toString()
        const newUserTask = {}
        newUserTask[taskId] = {
            id: taskId,
            title,
            description,
            isCompleted: false
        }
        const newUserTasks = {
            ...userTasks,
            ...newUserTask

        }
        setUserTasks(newUserTasks)
        setModalToggle(false)
    }

    useEffect(() => {
        getCurrentUserTasks()
    }, []);

    useEffect(() => {
        updateLocalTasks()
    }, [userTasks]);

    return (
        <TaskIdContext.Provider value={{toggleTaskCompletion}}>
            <>
                {modalToggle && <ModalForm createNewTask={createNewTask} onClose={modalHandler}/>}
                <div className="home__tasks_wrapper">
                    {(userTasks && <TasksWrapper userTasks={Object.values(userTasks)}/>) ||
                        <Card className='home'>
                            <h2>Новых задач пока нет!</h2>
                        </Card>}
                </div>
                <div className="home__button_wrapper">
                    <button type='button' className='button home__button' onClick={modalHandler}>Добавить задачу
                    </button>
                </div>
            </>
        </TaskIdContext.Provider>
    );
}

export default Home;
