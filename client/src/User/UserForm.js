import React, { useContext } from "react"
import { Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const UserForm = (props) => {
 const { user } = useContext(AuthContext)
 
 //handleSubmit=(e)=>{
    // e.preventDefault();
 //}
 return (
     <>
     <Form > 
      {/* onSubmit={handleSubmit} */}
         <Form.Group widths="equals">
             <Form.Input
             label="First Name"
             placeholder="FirstName"
             name={user.First_Name}
             />
         </Form.Group>
     </Form>
     </>
 )
}

export default UserForm;