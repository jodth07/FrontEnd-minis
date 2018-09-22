import React, {Component} from 'react';

export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : []
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
            </div>
        );
    }
}