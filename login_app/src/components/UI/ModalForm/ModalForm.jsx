import React, {useRef} from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import './ModalForm.css'

function ModalForm({onClose, createNewTask}) {
    const taskTitleRef = useRef()
    const taskDescriptionRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        const taskTitle = taskTitleRef.current.value
        const taskDescription = taskDescriptionRef.current.value
        createNewTask(taskTitle, taskDescription)

    }

    return (
        <>
            {ReactDOM.createPortal(
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <div className="overlay" onClick={onClose}/>,
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                <Card className='modal'>
                    <form onSubmit={onSubmit}>
                        <div className="modal_form__input_group">
                            <label htmlFor='task-title'>Заголовок задачи</label>
                            <input type='text' id='task-title' ref={taskTitleRef} required/>
                            <label htmlFor='task-description'>Описание задачи</label>
                            <input type='text' id='task-description' ref={taskDescriptionRef}/>
                            <small />
                        </div>
                        <div className="modal_form__button_wrapper">
                            <button type='submit' className='button'>Создать</button>
                        </div>
                    </form>
                </Card>,
                document.getElementById('modal-root')
            )}

        </>
    )
}


export default ModalForm