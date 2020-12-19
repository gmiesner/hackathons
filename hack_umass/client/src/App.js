import logo from './logo.svg';
import './App.css';

import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={} />
          <Route exact path="/login" component={} />
          <Route exact path="/dashboard:username" component={} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
