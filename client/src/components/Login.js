import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import devLogo from "../images/DevTrackerLogo.png";
import styled from "styled-components"

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
      <PicDiv>

      </PicDiv>
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
  background: url(${devLogo}) no-repeat center;
  width: 100%;
  
`



const styles = {
  box:{
    // margin: "150px 0px 100px px",
    lineHeight: "40px",
    fontSize: "15px",
    fontWeight: "bold",
    textShadow: "0 1px white",
    background: "#f3f3f3",
    padding: "50px",
    width: "50px",
    height: "300px"
  },
  topLetter:{
    fontSize: "25px",
    fontWeight: "bold",
  }
}

export default Login;

