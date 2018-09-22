import React, {Component} from 'react';

export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : [
                "create a todo list",
                "continue studying"
            ]
        };
    }

    addItem(item){
        let listState = this.state;
        listState.todoList.push(item);

        this.setState(listState);
    }

    deleteItem(index){
        let listState = this.state;
        listState.todoList.splice(index, 1);

        this.setState(listState);
    }

    render(){
        return (
            <div>
                <h2>This is where the todo-list will go</h2>
                <h2>Input line</h2>
                <div id="container">
                    <h1 className="todo-header">To do List</h1>
                    <input id="addToDo" type="text" placeholder="Add to do here" />
                    <ul>
                        <li><span><i className="far fa-trash-alt"></i></span> Eat</li>
                        <li><span><i className="far fa-trash-alt"></i></span> Sleep</li>
                        <li><span><i className="far fa-trash-alt"></i></span> Drink</li>
                        <li><span><i className="far fa-trash-alt"></i></span> Repeat</li>
                    </ul>
                </div>
            </div>
        );
    }
}