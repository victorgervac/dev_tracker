import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Button} from "semantic-ui-react";
import styled from "styled-components";

const Navbar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div style={styles.navbar}> 
        <Wrapper>   
          <div> 
            <Link style={styles.navtext} to="/home">
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
    height: "70px",
    backgroundColor: "#2B061E",
    padding: "10px",
    justifyContent: "space-between",
  },
  navtext: {
    color: "#F1ECCE",
    fontSize: "2em",
    padding: "10px",
  },
};

export default Navbar;
