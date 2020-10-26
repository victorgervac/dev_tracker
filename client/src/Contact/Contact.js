import React, { useState } from "react"
import { Card, Button } from "semantic-ui-react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router';
import axios from "axios"

const Contact =(props)=>{
    console.log("contact:",props.contacts)
    const history = useHistory()
    const [ editing, setEditing] = useState(false)
    
    const deleteContact = async () => {
        try{
          const res = await axios.delete(`/api/jobs/${props.job.id}/contacts/${props.contact.id}`);
          history.go(0)
        } catch (err) {
          alert("could not delete contact")
        }
      }
    
    return(
        <>
        { editing
            ?
             <ContactForm editContact={props.editContact} setEditing={setEditing} contact={props.contact} job={props.job}/>
            :
                <div>
                    <div class="ui card">
                    <div class="content">{props.contact.first_name}</div>
                    <div class="content">{props.contact.last_name}</div>
                    <div class="content">{props.contact.phone}</div>
                    <div class="content">{props.contact.email}</div>
                    <Button onClick={() => setEditing(!editing)}> Edit</Button>
                    <Button onClick={deleteContact} color="red">
                        <p>Delete</p>
                    </Button>
                </div>
            </div>
        }
        </>
    )
}

export default Contact;