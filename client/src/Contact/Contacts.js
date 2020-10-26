import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Contacts=(props)=>{
    const [ contacts, setContacts ]= useState([])
    const [ adding, setAdding ]= useState(false)
    const [ editing, setEditing] = useState(false)


    const getContacts=async()=>{
        try{
        let res = await Axios.get(`/api/jobs/${props.job.id}/contacts`)
          setContacts(res.data);
          console.log("log", res.data)
        }
        catch(err){
            console.log(err)
            alert("Error: No Contacts ")
        }
    }

    useEffect(()=>{
        getContacts()
        },[])

    const addContact = (newContact) => {
        setContacts([newContact, ...contacts])
        setAdding(false)
    }

    const editContact = (updatedContact) => {
        setContacts(contacts.map( c => {
            if(c.id === updatedContact.id){
                return updatedContact
        }return c
    
        }))
    } 

    const renderContacts= ()=> {
        return contacts.map((c)=>{
            return (
                <Contact key={c.id} contact={c} editContact={editContact} job={props.job}/>
                )
            })
        }
        return(
            <div>
            <h1>Contacts</h1>
            <Button color="green"  onClick={()=>setAdding(!adding)}>{adding ? "Cancel" : "Add Contact"}</Button>
            { adding && <ContactForm addContact={addContact} job={props.job}/> }
            <div>{!adding && renderContacts()}</div>
        </div>
    )
}

export default Contacts