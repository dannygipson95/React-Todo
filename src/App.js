import React from 'react';
import {v4} from 'uuid';
import ListForm from './components/TodoForm'
import ToDoList from './components/TodoList'
import styled from 'styled-components'

const GlobalDiv = styled.div`
  font-size: 62.5%;
  height: 100%;
  margin: 0;
  background: white;


  h1{
    font-size: 4rem;
    color: white;
    background: #005691;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid #005691;
    margin-top: 0;
  }
`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: [],
    }
  }

  toggleTask = taskId =>{
    this.setState({
      toDo: this.state.toDo.map(task=>{
        if (task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: v4(),
      completed: false
    };
    this.setState({
      toDo: [ newTask,...this.state.toDo]
    })
  }

  deleteCompleted = () => {
    let newTasks = []
    this.state.toDo.forEach((task, index) =>{
      if (task.completed === false){
        newTasks = [...newTasks, this.state.toDo[index]]
      }
    })
    this.setState({
      toDo: newTasks
    })
  }

  render() {
    return (
      <GlobalDiv>
        <h1>My To Do List</h1>
        <ListForm addTask={this.addTask} deleteCompleted={this.deleteCompleted}/>
        <ToDoList toggleTask={this.toggleTask} toDo={this.state.toDo}/>
      </GlobalDiv>
    );
  }
}

export default App;
