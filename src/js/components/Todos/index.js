import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Need to work on design as well.
export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : [
                {
                    id : this.createID(),
                    task: "Get some pen"
                },
                {
                    id : this.createID(),
                    task:"Get some pensil"
                },
                {
                    id : this.createID(),
                    task:"Get some ink"
                },
                {
                    id : this.createID(),
                    task:"Get some notebook"
                },
                {
                    id : this.createID(),
                    task:"Get some batteries"
                }
            ]
        };
        this.createTask = this.createTask.bind(this);
    }

    createID(){
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    createTask(event){
        let listState = this.state;
       
        if(event.keyCode == 13){
            let task = {
                id: this.createID(),
                task:event.target.value
            };
            listState.todoList.push(task);
            this.setState(listState);
            event.target.value = "";
        }
    }

    deleteTask(id){
        let listState = this.state;

        const state = {
            todoList : []
        };
        
        listState.todoList.forEach((item) => {
            if (item.id !== id){
                state.todoList.push(item);
            }
        });

        // let newlistState = listState.todoList.filter((item) => item.id !== id);

        this.setState(state);
    }

    render(){

        const listItems = this.state.todoList.map((item) => <li className="list-group-item list-group-item-action" key={item.id}>
            {item.task}
            <span onClick={() => this.deleteTask(item.id)}>
                {/* <i className="fas fa-times"></i> */}
                X
            </span>
            
        </li>);

        return (
            <div>

                <div className="container p-4">
                    <h1>Todo List</h1>
                </div>

                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    <ul className="list-group list-group-flush">
                        <input className="list-group-item list-group-item-action" onKeyDown={this.createTask} type="text" placeholder="What needs to be done?" />
                        {listItems}   
                        <p>{this.state.todoList.length} items left to be completed</p>  
                    </ul>
                </div>

            </div>
        );
    }
}

Todos.propTypes = {
    listItem: PropTypes.string
};