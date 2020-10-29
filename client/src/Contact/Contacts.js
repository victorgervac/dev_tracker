import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import styled from "styled-components";

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
            
    return(
        <Wrapper>
            <Header>Contacts</Header>
            <hr/>
            <Button color="green" onClick={()=>setAdding(!adding)} size="mini">{adding ? "Cancel" : "Add Contact"}</Button>
            { adding && <ContactForm addContact={addContact} job={props.job}/> }
            {contacts.map( c => <Contact key={c.id} contact={c} editContact={editContact} job={props.job}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-width: 3px;
  border-color: #606F8C;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 5px 10px #606F8C;
  width: 45%;
  padding:10px;
`

const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
`

export default Contacts