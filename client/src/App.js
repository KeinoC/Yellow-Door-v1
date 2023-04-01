import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../components/Home-Access/Nav/Nav.jsx";
import Login from "../components/Home-Access/LoginOut/Login.jsx";
import Landing from "../components/Home-Access/Landing/Landing.jsx";


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

          test
          <Route exact path="/" element = {<Landing />}/>
    </>
  )
}

export default App;
