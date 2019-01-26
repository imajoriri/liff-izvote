import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { Grid } from 'react-bootstrap';

import CreateVote from "./containers/CreateVote";
import ResultVote from "./containers/ResultVote";
import ToVote from "./containers/ToVote";

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Route path='/' exact component={CreateVote}/>
          <Route path='/ToVote' exact component={ToVote}/>
          <Route path='/ResultVote' exact component={ResultVote}/>
        </div>
      </Router>
    );
  }
}

export default App;