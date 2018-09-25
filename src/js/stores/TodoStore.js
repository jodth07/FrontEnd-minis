import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

export class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todoList = [
                {
                    id : createID(),
                    task: "Get some pen",
                    completed:false
                },
                {
                    id : createID(),
                    task:"Get some pensil",
                    completed:false
                },
                {
                    id : createID(),
                    task:"Get some ink",
                    completed:false
                },
                {
                    id : createID(),
                    task:"Get some notebook",
                    completed:false
                },
                {
                    id : createID(),
                    task:"Get some batteries",
                    completed:false
                }     
        ]; 
    }

    getAllTasks(){
        return this.todoList;
    }

    createTask(text){ 
        this.todoList.push({
            id: createID(),
            task: text,
            completed: false
        });
        this.emit("change");
    }

    deleteTask(id){
        this.todoList = this.todoList.filter((item) => item.id !== id);
        this.emit("change");
    }

    actionHandler(action){
        switch(action.type){
            case "CREATE_TASK": {
                this.createTask(action.text);
                break;
            }
            case "DELETE_TASK":{
                this.deleteTask(action.id);
                break;
            }
        }
    }

}


export const createID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};


export const todoStore = new TodoStore;
dispatcher.register(todoStore.actionHandler.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;