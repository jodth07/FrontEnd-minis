import dispatcher from '../dispatcher';

export function addContact(data){
    if (data.full_name && data.email){
        dispatcher.dispatch({
            type:"ADD_CONTACT",
            data
        });
    }
    
}

export function deleteContact(id){
    dispatcher.dispatch({
        type:"DELETE_CONTACT",
        id
    });
}

export function editContact(id){

    
    dispatcher.dispatch({
        type:"DELETE_CONTACT",
        id
    });
}

window.deleteContact = deleteContact;