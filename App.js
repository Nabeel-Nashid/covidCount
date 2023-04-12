import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './Components/India';
import World from './Components/World';
import Header from './Components/Header';
// import {Button} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid">    
      
      <Router>
      <Header/>
          <Switch>

            <Route exact path="/">
                <India/>
            </Route>

            <Route path="/india">
                <India/>
            </Route>

            <Route path="/world">
                <World/>
            </Route>

            <Route path="/">
            </Route>   
          </Switch>
      </Router>
    </div>
  );
}

export default App;