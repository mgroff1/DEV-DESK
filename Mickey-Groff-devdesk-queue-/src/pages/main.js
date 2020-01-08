import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { LinkContainer } from "react-router-bootstrap";
import IndexPage from "./index";
import ContactPage from "./contact";
import SigninPage from "./signin";
import SignupPage from "./signup";
import WelcomePage from "./welcome";
import ForgotpassPage from "./forgotpass";
import { Switch, Route, Router } from "./../util/router.js";
import { ProvideAuth } from "./../util/auth.js";
import {Headerlogo} from "./../assets/LambdaImg";


function App(props) {
  return (
    <div>
    <div className="headtop web">
    <Headerlogo/>
      <p className=" heading">DEV DESK QUEUE!</p>
      </div>
    <ProvideAuth>

      <Router>
      <Pagination className="web">
        <LinkContainer to="/">
          <Pagination.Item>Home</Pagination.Item>
        </LinkContainer>

        <LinkContainer to="/welcome">
          <Pagination.Item>Welcome</Pagination.Item>
        </LinkContainer>

        <LinkContainer to="/signup">
          <Pagination.Item>Sign Up</Pagination.Item>
        </LinkContainer>

        <LinkContainer to="/signin">
          <Pagination.Item>Sign In</Pagination.Item>
        </LinkContainer>

        <LinkContainer to="/contact">
          <Pagination.Item>Submit A Ticket</Pagination.Item>
        </LinkContainer>
      </Pagination>
        <Switch>

          <Route exact path="/" component={IndexPage} />
          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/welcome" component={WelcomePage} />
          <Route exact path="/forgotpass" component={ForgotpassPage} />
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >

                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
    </div>
  );
}

export default App;
