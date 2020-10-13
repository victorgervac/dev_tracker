import React, { useContext } from "react"
import { Form } from "semantic-ui-react";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";

const UserForm = (props) => {

 const { user, handleUpdate } = useContext(AuthContext);

 //handleSubmit=(e)=>{
    // e.preventDefault();
//Axios

 //}
 return (
     <>
     <Form > 
      {/* onSubmit={handleSubmit} */}
      <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            placeholder="First Name"
            name="firstname"
            required
            //onChange={(e) => setFirsName(e.target.value)}
            value={user.first_name}
          />
            <Form.Input
            label="Last Name"
            placeholder="Last Name"
            name="lastname"
            required
            //onChange={(e) => setFirsName(e.target.value)}
            value={user.last_name}
          />
          <br/>
            <Form.Input
            label="E-Mail"
            placeholder="E-Mail"
            name="lastname"
            required
            //onChange={(e) => setFirsName(e.target.value)}
            value={user.email}
          />
         </Form.Group>
     </Form>
     </>
 )
}

export default UserForm;