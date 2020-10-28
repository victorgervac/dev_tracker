import React, { useState } from "react"
import { Card, Button, Feed, Icon } from "semantic-ui-react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { useHistory } from 'react-router';
import axios from "axios"

const Contact =(props)=>{
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
                <Card>
                <Card.Content>
                  <Card.Header>{props.contact.first_name} {props.contact.last_name}</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                      <Feed.Content>
                        <Feed.Summary>
                        {props.contact.phone}
                        </Feed.Summary>
                        <Feed.Summary>
                        {props.contact.email}
                        </Feed.Summary>
                        <Icon name="trash" color="red" onClick={deleteContact}/>
                        <Icon name="pencil" color="green" onClick={() => setEditing(!editing)}/>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
              </Card>
            }
        </>
    )
}

const styles = {
    content: {
      display: "flex",
    },
    header: {
        fontWeight: "bold",
        marginRight: "10px"
    }
  };

export default Contact;