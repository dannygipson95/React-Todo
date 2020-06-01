import React from 'react'

import ToDo from './Todo'

const ToDoList = props => {
    const {toggleTask, toDo} = props
    return(
        <div>
            {toDo.map(task => {
                return(
                    <ToDo task={task} toggleTask={toggleTask} key={task.id}/>
                )
            })}
        </div>
    )
}

export default ToDoList