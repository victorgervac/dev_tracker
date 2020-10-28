import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Label, List, Table } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
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
      // password: password.value,
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
      <div style={styles.header}>Account Setting</div>
      <div style={styles.divBox}>
        <Form onSubmit={handleSubmit}>
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
            <Form.Input 
              label="E-Mail"
              placeholder="E-Mail"
              name="email"
              required
              onChange={handleChange}
              value={formValues.email}
              />
              <Button floated color="blue" type="submit">
                Save
              </Button>
        </Form>
        </div>
      </>
    );
  };

  return (
    <div>
      <h1>{renderUsers()}</h1>
    </div>
  );
};

const styles={
  header:{
    backgroundColor: "#606F8C",
    color: 'white',
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: "30px",
  },
  divBox:{
    background: "#DAD7C5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}

export default User;