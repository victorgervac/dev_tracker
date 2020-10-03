import React, { useState, useContext } from "react";
import { Button, Form, Label } from "semantic-ui-react";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const email = useFormInput("", "E-mail");
  const password = useFormInput("", "Password");
  const passwordConfirmation = useFormInput("", "Password Confirmation");

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
            E-MAIL
          </Label>
          <Form.Input {...email} />
        </div>
        <br />
        <Label color="blue" ribbon>
          PASSWORD
        </Label>
        <Form.Input style={styles.item} {...password} />
        <br />
        <Label color="blue" ribbon>
          PASSWORD CONFIRMATION
        </Label>
        <Form.Input {...passwordConfirmation} />
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
