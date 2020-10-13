import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, List } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import UserForm  from "./UserForm"

const User = (props) => {
  const { user } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false)

  const renderUsers = () => {
    return (
      <>
          <List.Header>Account Settings</List.Header>
          <List.Description>Name:{user.first_name} {user.last_name}</List.Description>
          {/* <div class="description">{user.last_name}</div> */}
          <List.Description>E-mail:{user.email}</List.Description>     
       
      </>
    );
  };
  
  return (
    <div>
      {showForm && <UserForm />}
    <Button onClick={()=> setShowForm(!showForm)} color="green"> 
    {showForm ? "Close Form" : "Show Form" }
    </Button>
      <h1>{renderUsers()}</h1>
    </div>
  );
};

export default User;
