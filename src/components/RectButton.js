import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/RectButton.css";

class RectButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    // ボタンを押していいかどうかでボタンの色を変える
    var buttonStyle;
    if(this.props.enablePush){
      buttonStyle = style.enableButtonStyle;
    }else{
      buttonStyle = style.unenableButtonStyle
    }

    return(
      <div>
        <button 
          className={buttonStyle}
          onClick={(e) => this.props.onClick(e)}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}

export default RectButton;
