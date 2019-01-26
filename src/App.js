import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { Grid } from 'react-bootstrap';

import CreateVote from "./containers/CreateVote";
import ResultVote from "./containers/ResultVote";
import ToVote from "./containers/ToVote";

import liff, { liffContext } from "./liff";

class App extends Component {
  render() {
    //var type = liff._auth.context.type;
    var type = liffContext.type;

    // トークルームとグループのみのアクセスを許可する
    if(type === "room" || type === "group"){
      return (
        <Router>
          <div >
            <Route path='/' exact component={CreateVote}/>
            <Route path='/ToVote' exact component={ToVote}/>
            <Route path='/ResultVote' exact component={ResultVote}/>
          </div>
        </Router>
      );
    }else{
      return(
        <div>
          トークルームかグループでご利用ください
        </div>
      )
    }
  }
}

export default App;
