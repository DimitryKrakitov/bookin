import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import BookingsIndex from "../components/bookings/bookings_index"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bookings" exact component={BookingsIndex} />
    </Switch>
  </Router>
);
