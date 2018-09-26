import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import {editContact} from '../actions/ContactActions';
import {contactStore} from '../stores/ContactStore';


export default class EditContact extends Flux.View {

    constructor(){
        super();
        this.state = {
            contact : {}
        };
    }

    componentDidMount(){
        if (this.props.match.params.id !== 'undefined'){
            const contact = contactStore.getAllContacts().find(cont => cont.id == this.props.match.params.id);
            this.setState({contact});
        }
    }

    render() {
        var curr_card = this.state.contact;

        var newCard = {
            id:curr_card.id
        };
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Edit the information for {curr_card.full_name}</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder={curr_card.full_name}
                             onChange={(e) => newCard.full_name = e.target.value} />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder={curr_card.email} onChange={(e) => newCard.email = e.target.value}   />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder={curr_card.phone} onChange={(e) => newCard.phone = e.target.value}/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder={curr_card.address} onChange={(e) => newCard.address = e.target.value}/>
                        </div>
                        <button type="button" className="btn btn-primary form-control" onClick ={() => {
                            editContact(newCard);
                            this.props.history.push('/contacts');
                            }}>save</button>
                        <Link className="mt-3 w-100 text-center" to="/contacts">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        );
    }
}