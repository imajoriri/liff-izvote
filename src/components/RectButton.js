import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/RectButton.css";

class RectButton extends Component {
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

export default RectButton;