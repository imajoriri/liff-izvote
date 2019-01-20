import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/ToVoteResultPage.css";

class ToVoteResultPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button className={style.buttonStyle}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default ToVoteResultPage;
