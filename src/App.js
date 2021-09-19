import React, { useContext } from 'react';
import Profile from './pages/profile';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Chat from './pages/chat';

const App = () => {
  const { user } = useContext(AuthContext);  

  return (
    <Router>
      <Switch>        
        <Route exact path="/">
            { user ? <Chat /> : <Redirect to="/login"/> }
        </Route>
        <Route path="/login"> { user ? <Redirect to="/"/> : <Login /> }</Route>
        <Route path="/cadastro">{ user ? <Redirect to="/"/> : <Register /> } </Route>
        <Route path="/chat">{ !user ? <Redirect to="/"/> : <Chat /> } </Route>
        <Route path="/profile/:username"> <Profile /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
