import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import { Grid } from 'react-bootstrap';

import CreateVote from "./containers/CreateVote";
import ResultVote from "./containers/ResultVote";
import ToVote from "./containers/ToVote";
import ChoiceIzakaya from "./containers/ChoiceIzakaya";

import liff, { liffContext } from "./liff";

class App extends Component {
  render() {
    //var type = liff._auth.context.type;
    var type = liffContext.type;

    // トークルームとグループのみのアクセスを許可する
    // TODO undefinedを許しているのは開発用。ブラウザからアクセスできるため
    if(type === "room" || type === "group" || type === undefined){
      return (
        <Router>
          <div >
            <Route path='/' exact component={CreateVote}/>
            <Route path='/ToVote' exact component={ToVote}/>
            <Route path='/ResultVote' exact component={ResultVote}/>
            <Route path="/ChoiceIzakaya" exact component={ChoiceIzakaya} />
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
