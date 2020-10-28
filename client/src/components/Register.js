import React, { useState, useContext } from "react";
import { Button, Form} from "semantic-ui-react";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DevNoTextLogo from "../images/DevNoTextLogo.png"
import {Link} from "react-router-dom";
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
    <>
    <Wrapper >
      <Form  onSubmit={handleSubmit}>
        <div style={styles.box}>
          <div>
        <h1 style={styles.topLetter}>Welcome to Devtracker.</h1>
        <div>Create your account by filling the form bellow.</div>
        </div>
          <div>
          <label>
            First Name
          </label>
          <input autoFocus {...firstName} />
        </div>
        <div>
          <label>
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
        <Button color="blue" type="submit">
          Sign Up
        </Button>
        </div>
      </Form>
      <PicWrapper>
      <PicDiv/>
      <Text>
          <div style={styles.topLetter}>Do you already have an account? </div>
          That's awesome! You can login by clicking on 
          the button below.
          <br/>
          <ButtonDiv>
            <Link to="/login"><Button color="blue"> Log in</Button></Link>
          </ButtonDiv>
        </Text>
      </PicWrapper>
      </Wrapper>
    </>
  );
};
export default Register;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`
const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  height: 100vh;
  width: 40%;
`
 const PicDiv = styled.div`
 background: black url(${DevNoTextLogo}) no-repeat center;
 background-size: cover;
 height: 300px;
 width: 300px;
 `
 const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
 `
 const Text = styled.div`
  color: white;
  text-align: center;
`
const styles = {
  box:{
    margin: "125px 50px 0 150px",
    lineHeight: "40px",
    fontSize: "15px",
    fontWeight: "bold",
    textShadow: "0 1px white",
    background: "white",
    padding: "50px",
    boxShadow: "5px 5px 5px 5px gray",
  },
  topLetter:{
    fontSize: "40px",
    fontWeight: "bold",
  }
}