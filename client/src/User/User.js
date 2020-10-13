import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, List, Table } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import UserForm  from "./UserForm"
import {Link} from "react-router-dom"

const User = (props) => {
  const { user } = useContext(AuthContext);
  const [firsName, setFirstName]= useState("")
  const [showForm, setShowForm] = useState(false)

  const renderUsers = () => {
    return (
      <>
          <Table compact celled definition small>
          <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
            Name
            </Table.Cell>
            <Table.Cell>{user.first_name} {user.last_name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
            E-mail
            </Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>

        </Table.Body>   
        </Table>  
        {/* {showForm && <UserForm />}
    <Button onClick={()=> setShowForm(!showForm)} color="green"> 
    {showForm ? "Save" : "Edit Settings" }
    </Button> */}
        <Link to="/userEdit">
        <Button >
            <p>Edit User Info</p>
        </Button>
        </Link>
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
