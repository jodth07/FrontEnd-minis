import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import {contactStore, createID} from '../stores/ContactStore';
import {addContact} from '../actions/ContactActions';


export default class AddContact extends Flux.View {

    render() {
        var newCard = {};
        return (
            <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => newCard.full_name = e.target.value} />
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => newCard.email = e.target.value}   />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Enter phone" onChange={(e) => newCard.phone = e.target.value}/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" onChange={(e) => newCard.address = e.target.value}/>
                        </div>
                        <button type="button" className="btn btn-primary form-control" onClick ={() => {
                            addContact(newCard);
                            this.props.history.push('/contacts');
                            }}>save</button>
                        <Link className="mt-3 w-100 text-center" to="/contacts">or get back to contacts</Link>
                    </form>
                </div>
            </div>
        );
    }
}