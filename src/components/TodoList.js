import React from 'react'
import ToDo from './Todo'
import styled from 'styled-components'

const ToDoDiv = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    width: 60%;
    margin: 0 20%;
`

class ToDoList extends React.Component {
    render(){
        return(
            <ToDoDiv>
                {this.props.toDo.map(task => {
                    return(
                        <ToDo task={task} toggleTask={this.props.toggleTask} key={task.id}/>
                    )
                })}
            </ToDoDiv>
        );
    }
}

export default ToDoList