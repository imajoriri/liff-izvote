import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";
import style from "./style/CondButton.css";

class CondButton extends Component {
  constructor(props){
    super(props);
  }


  render(){
    // チェックされているかでstyleを変える変数
    // すでにチェック済みだったら押されているUIにする
    // statusが0なら、まだ押されて伊那からnotchecked
    // 1ならすでに洗濯済みだからchecked
    var checkedStyle;
    if(this.props.status === 0){
      checkedStyle = style.notChecked;
    }else{
      checkedStyle = style.checked;
    }

    return(
      <button 
        className={style.buttonStyle} 
        className={`${checkedStyle} ${style.buttonStyle}`}
        onClick={(conditionName) => this.props.onClick(this.props.conditionName)}>
          {this.props.text}
        </button>
    )
  }
}

export default CondButton;
