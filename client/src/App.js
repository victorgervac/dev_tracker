import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import JobBoard from "./board/JobBoard";
import JobShow from "./components/JobShow";
import ProtectedRoute from "./components/ProtectedRoute";
import AccountSettings from "./components/AccountSettings";
import FetchUser from "./components/FetchUser";
import UserForm from "./User/UserForm";
import JobForm from "./jobcomponents/JobForm";
import User from "./User/User";

function App() {
  return (
    <>
    <FetchUser>
      <Container>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/" component={JobBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact
            path="/accountSettings"
            component={AccountSettings}
            />
          <ProtectedRoute exact path ="/userEdit" component={UserForm} />
          <ProtectedRoute exact path ="/addJob" component={JobForm} />
          <ProtectedRoute exact path ="/viewAccount" component={User} />

          <ProtectedRoute exact path="/jobs/:id" component={JobShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
    </>
            
  );
}

export default App;
