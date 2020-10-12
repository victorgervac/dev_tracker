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

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={JobBoard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/jobBoard" component={JobBoard} />
          <ProtectedRoute
            exact
            path="/accountSettings"
            component={AccountSettings}
          />
          <ProtectedRoute exact path="/jobs/:id" component={JobShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
