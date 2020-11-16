import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login/Login";
import TopBar from "./pages/components/topBar/TopBar";
import Question from "./pages/questions";
import User from "./pages/User";
import SideBar from "./pages/components/sideBar/SideBar";
import createStartup from "./pages/createStartup";
import createUser from "./pages/createUser";
import Canva from "./pages/Canva";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/question" component={Question} />
        <Route path="/user" component={User} />
        <Route path="/createStartup" component={createStartup} />
        <Route path="/createUser" component={createUser} />
        <Route path="/canva" component={Canva} />
        {/* Rotas para teste */}
        <Route path="/ola" component={TopBar} />{" "}
        {/* essa rota n aparecea não ser q digite o endereo dela */}
        <Route path="/ola2" exact component={SideBar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
