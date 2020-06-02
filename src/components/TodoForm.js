import React from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 5%;
    
    input{
        width: 30%;
        border: 1px solid #005691;
        border-radius: 5px;
        font-family: 'Tenali Ramakrishna', sans-serif;
        font-size: 1.8rem;
    }

    button{
        border: 1px solid #005691;
        background: #e8f1f5;
        color: #005691;
        font-family: 'Tenali Ramakrishna', sans-serif;
        font-size: 1.8rem;
        border-radius: 5px;
        margin: 0 2%;
    }
`

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: '',

        }
    }

    changeHandler = event =>{
        this.setState({
            task: event.target.value
        });
    };

    submitHandler = event =>{
        event.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    };

    deleteHandler = event =>{
        event.preventDefault();
        this.props.deleteCompleted();
    }

    render() {
        return (
            <FormDiv>
                <input
                    type='text'
                    name='task'
                    placeholder='Add a task!'
                    value={this.state.task}
                    onChange={this.changeHandler}
                />
                <button onClick={this.submitHandler}>Add</button>
                <button onClick={this.deleteHandler}>Clear Completed</button>

            </FormDiv>
        )
    }
}

export default ListForm;