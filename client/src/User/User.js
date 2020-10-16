import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Label, List, Table } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
//import UserForm from "./UserForm"
import { Link, useHistory } from "react-router-dom"
import { useFormInput } from "../Hooks/useFormInput";

const User = (props) => {
  const { user, handleUpdate } = useContext(AuthContext);
  // console.log("first name: ", user.first_name)
  const history = useHistory();
  const [ formValues, setFormValues ] = useState({
    email: user.email || "",
    password: user.password || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
  })

  console.log("formValues: ",formValues)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(
      (user.id),
      {...formValues},
        // email: email.value,
        //password: password.value,
        // first_name: firstName.value, 
        // last_name: lastName.value,
       
    history
    )
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({...formValues, [name]: value})

  }


  const renderUsers = () => {
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="first_name"
              required
              onChange={handleChange}
              value={formValues.first_name}
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="last_name"
              required
              onChange={handleChange}
              value={formValues.last_name}
            />
            <br />
            <Form.Input
              label="E-Mail"
              placeholder="E-Mail"
              name="email"
              required
              onChange={handleChange}
              value={formValues.email}
            />
            <br />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
              //required
              onChange={handleChange}
              value={formValues.password}
            />
            <div>
              <Button color="green" type="submit">
                Save
        </Button>
            </div>
          </Form.Group>
        </Form>
      </>
    );
  };

  return (
    <div>
      <h1>{renderUsers()}</h1>
    </div>
  );
};

export default User;
