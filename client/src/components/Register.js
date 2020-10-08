import React, { useState, useContext } from "react";
import { Button, Form, Label } from "semantic-ui-react";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const email = useFormInput("test@test.com", "E-mail");
  const password = useFormInput("123456", "Password");
  const passwordConfirmation = useFormInput("123456", "Password Confirmation");
  const firstName = useFormInput("Jerry", "First Name");
  const lastName = useFormInput("Narly", "Last Name");

  const { handleRegister, authLoading, authErrors } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.value !== passwordConfirmation.value) {
      alert("Passwords do not match");
    } else {
      handleRegister(
        {
          email: email.value,
          password: password.value,
          passwordConfirmation: passwordConfirmation.value,
          first_name: firstName.value,
          last_name: lastName.value,
        },
        history
      );
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <Label color="blue" ribbon>
            First Name
          </Label>
          <Form.Input autoFocus {...firstName} />
          <Label color="blue" ribbon>
            Last Name
          </Label>
          <Form.Input {...lastName} />
          <Label color="blue" ribbon>
            E-MAIL
          </Label>
          <Form.Input {...email} />
        </div>
        <br />
        <Label color="blue" ribbon>
          PASSWORD
        </Label>
        <Form.Input type="password" style={styles.item} {...password} />
        <br />
        <Label color="blue" ribbon>
          PASSWORD CONFIRMATION
        </Label>
        <Form.Input type="password" {...passwordConfirmation} />
        <br />
        <Button color="green" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};
export default Register;

const styles = {
  formInput: {
    color: "black",

    fontWeight: "bold",
  },
};
