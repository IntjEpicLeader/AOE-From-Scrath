import "./layout.styles.css";

import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "../../utils/common";
import HomePage from "../home/homepage.redux";
import Empires from "../empires/empires.redux";

const Layout = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route path="/home" render={(props) => <HomePage {...props} />} />
          <Route path="/empires" render={(props) => <Empires {...props} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Layout;
