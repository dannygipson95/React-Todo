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

class ToDo extends React.Component {
    render() {
        return (
            <TaskDiv
                onClick={() => this.props.toggleTask(this.props.task.id)}
                className={`task ${this.props.task.completed ? 'completed': ''}`}
            >
                <p>{this.props.task.name}</p>
            </TaskDiv>
        );
    }
};

export default ToDo