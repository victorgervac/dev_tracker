import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
const Navbar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div style={styles.navbar}>
      <Wrapper>
        <div>
          <Link style={styles.navtext} to="/home">
            <Icon name="home" />
          </Link>
        </div>
        <div>
          <Link style={styles.navtext} to="/accountSettings">
            <Icon name="settings" />
          </Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link
            onClick={() => handleLogout(history)}
            style={styles.navtext}
            to="/login"
          >
            <Icon name="logout" />
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const styles = {
  navbar: {
    width: "100%",
    height: "60px",
    // backgroundColor: "white",
    backgroundColor: "black",
    padding: "10px",
    justifyContent: "space-between",
    borderBottom: "thin solid #606F8C",
  },
  navtext: {
    // backgroundColor: "white",
    // color: "#60708C",
    color: "#6E54A3",
    fontSize: "1.5em",
    padding: "10px",
  },
};

export default Navbar;