import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";

const Navbar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  const getRightNav = () => {
    if(!user){
      return (
        <>
          <Link style={styles.navtext} to="/register">
            Register
          </Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link style={styles.navtext} to="/login">
            Login
          </Link>
        </>
      );
    }
  };

  return (
    <div style={styles.navbar}>
      {user && 
        <Wrapper>   
          <div> 
            <Link style={styles.navtext} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link style={styles.navtext} to="/accountSettings">
              Settings
            </Link>
            <span style={{ marginRight: "10px" }}></span>
            <Link onClick={() => handleLogout(history)} style={styles.navtext} to="/login">
              Logout
            </Link>
          </div>
        </Wrapper>
      }
      {getRightNav()}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const styles = {
  navbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "black",
    padding: "10px",
    justifyContent: "space-between",
  },
  navtext: {
    color: "#F1ECCE",
    fontFamily: "Open Sans",
    fontSize: "2em",
  },
};

export default Navbar;
