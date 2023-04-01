import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import { Switch, SwitchRoute } from "react-router-dom";
import LandNav from "./Home-Access/Nav/LandNav.jsx";
import Landing from "../components/Home-Access/Landing/Landing.jsx";
import Login from "../components/Home-Access/LoginOut/Login.jsx";
import { withRouter } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <BrowserRouter>
        <LandNav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default withRouter(App);
