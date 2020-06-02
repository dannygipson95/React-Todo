import React from 'react'
import './Todo.css'
import styled from 'styled-components'

const TaskDiv = styled.div`
    width: 45%;
    border: 2px solid black;
    background: #005691;
    color: white;
    border-radius: 5px;
    padding: 0 1%;
    font-size: 1.8rem;
    text-align: center;
    margin: 1% 0;
`

const ToDo = props => {
    const {task} = props
    return (
        <TaskDiv
            onClick={() => props.toggleTask(task.id)}
            className={`task ${task.completed ? 'completed': ''}`}
        >
            <p>{task.name}</p>
        </TaskDiv>
    );
};

export default ToDo