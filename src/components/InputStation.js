import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import style from "./style/InputStation.css";

class InputStation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={style.divStyle}>
        <input type="text" className={style.inputStyle} placeholder="駅名を入力"/>
        <p className={style.textStyle}>駅で飲む</p>
      </div>
    )
  }
}

export default InputStation;
