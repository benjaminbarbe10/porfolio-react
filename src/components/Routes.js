import React from "react";
import { Switch, Route } from "react-router-dom";
import Skills from "./Skills";
import Home from "./Home";

//
// ─── ROUTES USING REACT ROUTER DOM ──────────────────────────────────────────────
//

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
);

export default Routes;
