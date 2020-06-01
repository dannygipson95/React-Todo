import React from 'react'
import './Todo.css'

const ToDo = props => {
    const {task} = props
    return (
        <div
            onClick={() => props.toggleTask(task.id)}
            className={`task ${task.completed ? 'completed': ''}`}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default ToDo