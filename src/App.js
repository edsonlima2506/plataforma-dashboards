import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
