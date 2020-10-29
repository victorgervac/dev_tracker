import React, { useState } from "react"
import Contact from "./Contact"
import {Form, Button} from "semantic-ui-react"
import Axios from "axios";

const ContactForm = ({contact={}, ...props})=> {
  const [firstName, setFirstName] = useState( contact.first_name || "" );
  const [lastName, setLastName] = useState( contact.last_name || "" );
  const [phone, setPhone] = useState( contact.phone || "" );
  const [email, setEmail]= useState( contact.email || "" );
  const jobId = props.job.id

  const handleSubmit =(e)=>{
       e.preventDefault();
       
       if (contact.id) {
        Axios
        .put(`/api/jobs/${jobId}/contacts/${contact.id}`,{first_name: firstName, last_name: lastName, phone, email})
        .then((res)=>{
            props.editContact(res.data)
            props.setEditing(false)
        }).catch((err)=>{
            alert("can not update contact")
        })
      } else {
        Axios
        .post(`/api/jobs/${jobId}/contacts`,{first_name: firstName, last_name: lastName, phone, email})
        .then((res)=>{
        props.addContact(res.data)
        }).catch((err)=>{
            alert("Error: contact was not created")
        })
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}> 
          <label>First Name</label>
          <input
          type="text"
          name="first_name"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          />
           <label>Last Name</label>
          <input
          type="text"
          name="last_name"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          />
          <label>Phone</label>
          <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          />
          <label>E-mail</label>
          <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <Button type='submit'>Save</Button>
        </Form>
      </div>
    )
}

export default ContactForm