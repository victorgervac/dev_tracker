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
      <div style={styles.box}>
      <div style={styles.header}>Account Settings</div>
        <Form onSubmit={handleSubmit}>
            <label>
            First Name
            </label>
            <input
              placeholder="First Name"
              name="first_name"
              required
              onChange={handleChange}
              value={formValues.first_name}
              />
            <label>
              Last Name
            </label>
            <input
              placeholder="Last Name"
              name="last_name"
              required
              onChange={handleChange}
              value={formValues.last_name}
              />
            <label>E-mail</label>
            <input
              placeholder="E-Mail"
              name="email"
              required
              onChange={handleChange}
              value={formValues.email}
              />
              <Button style={styles.button} color="green" type="submit">
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

const styles = {
  box:{
    margin: "50px 250px 125px 250px",
    lineHeight: "40px",
    fontSize: "15px",
    fontWeight: "bold",
    textShadow: "0 1px white",
    background: "white",
    padding: "50px",
    boxShadow: "5px 5px 5px 5px gray",
  },
  button:{
    top:"15px",
  },
  header:{
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center"
  },
}
export default User;
