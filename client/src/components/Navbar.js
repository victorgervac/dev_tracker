import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// const Navbar = () => (
// //   <Menu>
//     <Link to="/">
//       <Menu.Item>Home</Menu.Item>
//     </Link>
//     <Link to="/about">
//       <Menu.Item>About</Menu.Item>
//     </Link>
//     <Link to="/items">
//       <Menu.Item>Items</Menu.Item>
//     </Link>
//     <Link to="/register">
//       <Menu.Item>Register</Menu.Item>
//     </Link>
//     <Link to="/login">
//       <Menu.Item>login</Menu.Item>
//     </Link>
//   </Menu>
// );
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
        <span style={{ marginRight: "10px" }}></span>
      </div>
      <div>{getRightNav()}</div>
    </div>
  );
};

const styles = {
  navbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "blue",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  navtext: {
    color: "white",
    fontFamily: "Roboto",
    fontSize: "2em",
  },
};

export default Navbar;
