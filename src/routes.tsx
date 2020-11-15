import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import TopBar from "./pages/components/topBar/TopBar";
import Question from "./pages/questions";
import User from "./pages/User";
import SideBar from "./pages/components/sideBar/SideBar";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/question" component={Question} />
        <Route path="/user" component={User} />
        {/* Rotas para teste */}
        <Route path="/ola" component={TopBar} />{" "}
        {/* essa rota n aparecea não ser q digite o endereo dela */}
        <Route path="/ola2" exact component={SideBar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
