import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/registration'/>
      </Route>
      <Route exact path='/registration' component={Registration} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/employee/:id' component="" />
    </Switch>
  </Router>
  );
}

export default App;
