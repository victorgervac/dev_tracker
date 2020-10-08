import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const User = (props) => {
  const { user } = useContext(AuthContext);

  const renderUsers = () => {
    return (
      <div>
        <Card>
          <div class="header">Account Settings</div>
          <div class="description">{user.first_name}</div>
          <div class="description">{user.last_name}</div>
          <div class="description">{user.email}</div>
          <div>
            <Button color="green">Update</Button>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <h1>{renderUsers()}</h1>
    </div>
  );
};

export default User;
