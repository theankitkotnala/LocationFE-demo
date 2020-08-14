import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UsersLayout from './layouts/users';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/users">
            <UsersLayout/>
          </Route>
          <Route exact path="/">
            <Redirect to="/users"></Redirect>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
