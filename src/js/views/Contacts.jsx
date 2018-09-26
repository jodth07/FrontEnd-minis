import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal.jsx';
import avatar1 from '../../img/rigo-baby.jpg';
import {contactStore} from '../stores/ContactStore';
import {deleteContact} from '../actions/ContactActions';

export default class Contacts extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false,
            key : "",
            contacts : contactStore.getAllContacts()
        };
    }

    componentDidMount(){
        contactStore.on("change", () => {
            this.setState({
                contacts: contactStore.getAllContacts()
            });
        });
    }

    componentWillUnmount(){
        
    }


    render() {
        const cards = this.state.contacts.map((contact) => {
            return (
                <ContactCard key={contact.id} data={contact} onDelete={() => this.setState({ showModal: true, key: contact.id})}/>
            );
        });

        return (
            <div className="container">
                <div>
                    <p className="text-right my-3">
                        <Link className="btn btn-success" to="/add">Add new contact</Link>
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            {cards}
                        </ul>
                    </div>
                </div>
                <Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} onDelete={() => deleteContact(this.state.key)} />
            </div>
        );
    }
}
