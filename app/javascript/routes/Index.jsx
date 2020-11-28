import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import CalendarPage from "../components/calendar/calendar_page"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calendar" exact component={CalendarPage} />
    </Switch>
  </Router>
);
