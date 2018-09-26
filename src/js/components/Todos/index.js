import React, {Component} from 'react';
import {todoStore} from '../../stores/TodoStore';
import {deleteTask, createTask} from "../../actions/TodoActions";

// Need to work on design as well.
export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : todoStore.getAllTasks()
        };
    }

    componentDidMount(){
        todoStore.on("change", () => {
            this.setState({
                todoList: todoStore.getAllTasks()
            });
        });
    }

    render(){

        const listItems = this.state.todoList.map((item) => <li className="list-group-item list-group-item-action" key={item.id}>
            {item.task}
            
            <span onClick={() => deleteTask(item.id)}>
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
                        <input className="list-group-item list-group-item-action" onKeyDown={createTask} type="text" placeholder="What needs to be done?" />
                        {listItems}   
                        <p>{this.state.todoList.length} items left to be completed</p>  
                    </ul>
                </div>
            </div>
        );
    }
}
