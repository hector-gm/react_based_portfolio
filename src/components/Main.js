import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import FindMe from "./FindMe";
import Projects from './Projects';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/About" component={About} />
      <Route path="/FindMe" component={FindMe} />
    </Switch>
  );
};

export default Main;