import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);
  const getRightNav = () => {
    if (user) {
      return (
        <>
          <div onClick={() => handleLogout(history)} style={styles.navtext}>
            Logout
          </div>
        </>
      );
    } else {
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
      <div>        
        <Link style={styles.navtext} to="/">
          Home
        </Link>
      </div>
      <div>
        {user && 
          <>
            <Link style={styles.navtext} to="/accountSettings">
              Settings
            </Link>
          
            <Link style={styles.navtext} to="/login">
              Logout
            </Link>
          </>
        }
        {getRightNav()}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "#331832",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  navtext: {
    color: "#F1ECCE",
    fontFamily: "Roboto",
    fontSize: "2em",
  },
};

export default Navbar;
