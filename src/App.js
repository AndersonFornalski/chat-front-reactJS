import React, { useContext } from 'react';
import Profile from './pages/profile';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);  

  return (
    <Router>
      <Switch>        
        <Route exact path="/">
            { user ? <Home /> : <Redirect to="/cadastro"/> }
        </Route>
        <Route path="/login"> { user ? <Redirect to="/"/> : <Login /> }</Route>
        <Route path="/cadastro">{ user ? <Redirect to="/"/> : <Register /> } </Route>
        <Route path="/profile/:username"> <Profile /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
