import React from 'react';
import Profile from './pages/profile';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Home /> 
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
