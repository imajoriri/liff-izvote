import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { Grid } from 'react-bootstrap';

import sample, { store } from "./modules/sample";

import CreateVote from "./components/CreateVote";
import ResultVote from "./components/ResultVote";
import ToVote from "./components/ToVote";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={CreateVote}/>
          <Route path='/ToVote' exact component={ToVote}/>
          <Route path='/ResultVote' exact component={ResultVote}/>
        </div>
      </Router>
    );
  }
}

export default App;
