import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Principal from './pages/PrincipalPage';
import Users from './pages/Users'
import Stores from './pages/Stores';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
        <Route path="/principal" component={ Principal } />
        <Route path="/users" component={ Users } />
        <Route path="/stores" component={ Stores } />
    </Switch>
  );
}

export default App;
