import React from 'react'

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
            <form>
                <input
                    type='text'
                    name='task'
                    placeholder='Add a task!'
                    value={this.state.task}
                    onChange={this.changeHandler}
                />
                <button onClick={this.submitHandler}>Add</button>
                <button onClick={this.deleteHandler}>Clear Completed</button>

            </form>
        )
    }
}

export default ListForm;