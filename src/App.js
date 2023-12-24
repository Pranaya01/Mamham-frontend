import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Error from "./components/Error/Error";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import Dashboard from "./components/Dashboard";
import Subscription from "./components/Subscription/Subscription";
import CustomOrder from "./components/CustomOrder/CustomOrder";
import WeeklyMenu from "./components/WeeklyMenu/WeeklyMenu";
import Dishes from "./components/Dishes/Dishes";
import Menu from "./components/Menu/Menu";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Sidebar/>
        <Switch>
        <Route path="/" exact>
            <Dashboard/>
          </Route>
          <Route path="/subscription" exact>
            <Subscription/>
          </Route>
          <Route path="/custom-order" exact>
            <CustomOrder/>
          </Route>
          <Route path="/weekly-menu" exact>
            <WeeklyMenu/>
          </Route>
          <Route path="/dishes" exact>
            <Dishes/>
          </Route>
          <Route path="/menu" exact>
            <Menu/>
          </Route>
          <Route path="/plans" exact>
            <Plans/>
          </Route>
          <Route path="/*" exact>
            <Error/>
          </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
