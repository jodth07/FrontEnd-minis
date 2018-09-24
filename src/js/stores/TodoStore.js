import {EventEmitter} from 'events';

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
        this.createTask = this.createTask.bind(this);
    }

    getAllTasks(){
        // console.log("todo store is called");
        return this.todoList;
    }

    createTask(event){    
        if(event.keyCode == 13){
            this.todoList.push({
                id: createID(),
                task: event.target.value,
                completed: false
            });
            this.emit("change");

            event.target.value = "";
        }
    }

    deleteTask(id){
    

        // const state = {
        //     todoList : []
        // };
        
        // this.todoList.forEach((item) => {
        //     if (item.id !== id){
        //         state.todoList.push(item);
        //     }
        // });

        this.todoList = this.todoList.filter((item) => item.id !== id);
        this.emit("change");

    }

}


export const createID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const todoStore = new TodoStore;
window.todoStore = todoStore;
