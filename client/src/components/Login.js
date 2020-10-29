import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import devLogo from "../images/DevNoTextLogo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Form} from "semantic-ui-react";

const Login = (props) => {
  const history = useHistory();
  const { handleLogin, setUser, authLoading, authErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("test@test.com", "Email");
  const password = useFormInput("123456", "Password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    handleLogin({ email: email.value, password: password.value }, history);
  };
  return (
    <Wrapper>
      <PicWrapper>
        <PicDiv/>
        <Text>
          <div style={styles.topLetter}>New to DevTracker? Sign up below</div>
          <ButtonDiv>
            <Link to="/register"><Button color="blue"> Sign Up</Button></Link>
          </ButtonDiv>
        </Text>
      </PicWrapper>
      <div style={styles.box}>
        <h1 style={styles.topLetter}>Login to DevTracker</h1>
        <br/>
        <Form onSubmit={handleSubmit}>
          <p>{email.label}</p>
          <label>E-mail</label>
          <input autoFocus {...email}/>
          <p>{password.label}</p>
          <label>Password</label>
          <input style={{margin: "0px 0px 10px"}} type="password" {...password} />
          {authLoading ? (
            <Button color="blue" disabled loading>Loading</Button>
          ) : (
            <Button color="blue" type="submit">login</Button>
          )}
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const PicDiv = styled.div`
  background: black url(${devLogo}) no-repeat center;
  background-size: cover;
  height: 300px;
  width: 300px;
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
const Text = styled.div`
  color: white;
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px
`




const styles = {
  box:{
    margin: "125px 50px 125px 50px",
    lineHeight: "40px",
    fontSize: "15px",
    fontWeight: "bold",
    textShadow: "0 1px white",
    background: "white",
    padding: "50px",
    boxShadow: "5px 5px 5px 5px gray",
    width: "60%"
  },
  topLetter:{
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center"
  }
}

export default Login;

