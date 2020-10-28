import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import devLogo from "../images/DevNoTextLogo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";

const Login = (props) => {
  const history = useHistory();
  const { handleLogin, setUser, authLoading, authErrors } = useContext(
    AuthContext
  );
  const email = useFormInput("test@test.com", "Email");
  const password = useFormInput("123456", "Email");

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
          New to DevTracker? Sign up below
          <ButtonDiv>
            <Link to="/register"><Button> Sign Up</Button></Link>
          </ButtonDiv>
        </Text>
      </PicWrapper>
      <div style={styles.box}>
        <h1 style={styles.topLetter}>Login to DevTracker</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <p>{email.label}</p>
          <input autoFocus {...email} />
          <p>{password.label}</p>
          <input type="password" {...password} />
          {authLoading ? (
            <button disabled loading>Loading</button>
          ) : (
            <button type="submit">login</button>
          )}
        </form>
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
  }
}

export default Login;

