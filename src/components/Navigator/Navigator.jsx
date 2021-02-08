import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";

const Navigator = () => {
  return (
    <Router>
      {/* Application Header*/}
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/add">
          <UpdateCustomer />
        </Route>
        <Route path="/edit">
          <UpdateCustomer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigator;
