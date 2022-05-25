import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstPage from "../pages/FirstPage";
import TopList from "../pages/TopList";
import Stocks from "../pages/Stocks";
import Fiis from "../pages/Fiis";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={FirstPage} />
    <Route path="/toplist" component={TopList} />
    <Route path="/stocks" component={Stocks} />
    <Route path="/fiis" component={Fiis} />
  </Switch>
);

export default Routes;
