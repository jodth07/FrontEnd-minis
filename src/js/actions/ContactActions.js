import dispatcher from '../dispatcher';

export function deleteContact(id){
    dispatcher.dispatch({
        type:"DELETE_CONTACT",
        id
    });
}

window.deleteContact = deleteContact;