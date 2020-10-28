import React, { useState, useContext } from "react";
import { Button, Form, Label } from "semantic-ui-react";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ContactForm from "../Contact/ContactForm";

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
    <Wrapper>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label color="black">
            First Name
          </label>
          <input autoFocus {...firstName} />
        </div>
        <div>
          <label color="#2B061E">
            Last Name
          </label>
          <input {...lastName} />
        </div>
        <div>
          <label color="#2B061E">
            E-mail
          </label>
          <input {...email} />
        </div>
        <div>
          <label color="#2B061E">
            Password
          </label>
          <input type="password"  {...password} />
        </div>
        <div>
          <label color="#2B061E">
            Password Confirmation
          </label>
          <input type="password"{...passwordConfirmation} />
        </div>
        <button color="green" type="submit">
          Sign Up
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.div`
  padding-left: 5px;

`