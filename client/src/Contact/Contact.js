import React, { useState } from "react"
import { Card, Button } from "semantic-ui-react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router';

const Contact =(props)=>{
    console.log("contact:",props.contacts)
    const history = useHistory()
    const [ editing, setEditing] = useState(false)
    
    
    return(
        <>
        { editing
            ?
             <ContactForm editContact={props.editContact} setEditing={setEditing} contact={props.contact} job={props.job}/>
            :
                <div>
                    <h1>Contact</h1>
                    <div class="ui card">
                    <div class="content">{props.contact.first_name}</div>
                    <div class="content">{props.contact.last_name}</div>
                    <div class="content">{props.contact.phone}</div>
                    <div class="content">{props.contact.email}</div>
                    <Button onClick={() => setEditing(!editing)}> Edit</Button>
                </div>
            </div>
        }
        </>
    )
}

export default Contact;