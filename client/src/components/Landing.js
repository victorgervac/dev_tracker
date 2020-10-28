import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../Hooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import devLogo from "../images/DevTrackerLogo.png";
import styled from "styled-components"
import {Button} from "semantic-ui-react"
import {Link} from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <Link to="/login" >
        <Button>
          Login
        </Button>
      </Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/register" >
        <Button color="blue">
          Sign Up
        </Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black url(${devLogo}) no-repeat center;
  height: 100vh;
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
`

export default Landing;