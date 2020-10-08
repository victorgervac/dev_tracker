import React, {useContext} from "react"
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

//... rest as rest of prop
const ProtecedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtecedRoute;