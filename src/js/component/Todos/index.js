import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Need to work on design as well.
export default class Todos extends Component{

    constructor(){
        super();
        this.state = {
            todoList : [
                "Get some pen",
                "Get some pensil",
                "Get some ink",
                "Get some notebook",
                "Get some batteries"
            ]
        };
        this.addNewItem = this.addNewItem.bind(this);
    }

    addNewItem(event){
        let listState = this.state;
        if(event.keyCode == 13){
            listState.todoList.push(event.target.value);
            this.setState(listState);
            event.target.value = "";
        }
    }

    deleteListItem(key){
        let listState = this.state;
        let newlistState = listState.todoList.splice(key, 1);
        this.setState(listState);
    }

    render(){

        const listItems = this.state.todoList.map((item, key) => <li className="list-group-item list-group-item-action" key={key}>
            {item}
            <span onClick={() => this.deleteListItem(key)}>
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
                        <input className="list-group-item list-group-item-action" onKeyDown={this.addNewItem} type="text" placeholder="What needs to be done?" />
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