import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Principal from './pages/PrincipalPage';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
        <Route path="/principal" component={ Principal } />
    </Switch>
  );
}

export default App;
