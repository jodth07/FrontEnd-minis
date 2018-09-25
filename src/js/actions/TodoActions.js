import dispatcher from '../dispatcher';

export function createTask(event) {
    if(event.keyCode == 13){
        dispatcher.dispatch({
            type:"CREATE_TASK",
            text:event.target.value
        });
        event.target.value = "";
    }
}

export function deleteTask(id){
    dispatcher.dispatch({
        type:"DELETE_TASK",
        id
    });
}