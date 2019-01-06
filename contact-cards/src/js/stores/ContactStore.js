import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class ContactStore extends EventEmitter{
    constructor(){
        super();
        this.contacts = [
                {
                    id: createID(),
                    full_name : "Mike A Anamendolla",
                    address : "5842 Hillcrest Rd",
                    phone : "(870) 288-4149",
                    email : "mike.ana@example.com"
                },
                {
                    id: createID(),
                    full_name : "Mike B Anamendolla",
                    address : "5842 Hillcrest Rd",
                    phone : "(870) 288-4149",
                    email : "mike.ana@example.com"
                },
                {
                    id: createID(),
                    full_name : "Mike C Anamendolla",
                    address : "5842 Hillcrest Rd",
                    phone : "(870) 288-4149",
                    email : "mike.ana@example.com"
                }
            ];
    }

    getAllContacts(){
        return this.contacts;
    }

    addContact(data){
        this.contacts.push({
            id: createID(),
            full_name : data.full_name,
            address : data.address,
            phone : data.phone,
            email : data.email
        });
        this.emit("change");
    }

    editContact(data){
       
        for (var index in this.contacts){
            if (data.id == this.contacts[index].id){
                this.contacts[index].full_name = data.full_name;
                this.contacts[index].email = data.email;
                this.contacts[index].address = data.address;
                this.contacts[index].phone = data.phone;

                this.emit("change");
            } 
        }
        
    }

    deleteContact(id){
        this.contacts = this.contacts.filter((item) => item.id !== id);
        this.emit("change");
    }

    actionHandler(action){
        switch(action.type){
            case "ADD_CONTACT": {
                this.addContact(action.data);
                break;
            }
            case "DELETE_CONTACT":{
                this.deleteContact(action.id);
                break;
            }
            case "EDIT_CONTACT":{
                this.editContact(action.data);
                break;
            }
        }
    }

}

export const createID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};


export const contactStore = new ContactStore;
dispatcher.register(contactStore.actionHandler.bind(contactStore));

window.contactStore = contactStore;


{/* Test Commands
    contactStore.getAllContacts();
    
    contactStore.actionHandler({type:"DELETE_CONTACT", id:});
    
    contactStore.actionHandler({type:"ADD_CONTACT", data:{
        full_name : "Mike D Anamendolla",
        address : "5842 Hillcrest Rd",
        phone : "(870) 288-4149",
        email : "mike.ana@example.com"
    }});
    

// Delete Contacts

    contactStore.deleteContact();
    contactStore.deleteContact();
    contactStore.deleteContact();
    contactStore.deleteContact();
    contactStore.deleteContact();
    contactStore.deleteContact();
    contactStore.deleteContact();


    contactStore.editContact({
        id:
        full_name : "Mike D Anamendolla",
        address : "5842 Hillcrest Rd",
        phone : "(870) 288-4149",
        email : "mike.ana@example.com"
    });


// Add contacts


    contactStore.addContact({
        full_name : "Mike D Anamendolla",
        address : "5842 Hillcrest Rd",
        phone : "(870) 288-4149",
        email : "mike.ana@example.com"
    });
    contactStore.addContact({
        full_name : "Mike E Anamendolla",
        address : "5842 Hillcrest Rd",
        phone : "(870) 288-4149",
        email : "mike.ana@example.com"
    });
    contactStore.addContact({
        full_name : "Mike F Anamendolla",
        address : "5842 Hillcrest Rd",
        phone : "(870) 288-4149",
        email : "mike.ana@example.com"
    });
*/}