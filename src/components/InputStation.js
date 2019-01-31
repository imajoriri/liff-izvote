import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import style from "./style/InputStation.css";

class InputStation extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // choiceIzakayaから戻ってきた時に駅入力項目が空になってしまうため
    document.getElementById("input-station").value = this.props.value;
  }

  render(){
    return(
      <div className={style.divStyle}>
        <input type="text" 
          id="input-station"
          className={style.inputStyle} 
          placeholder="駅名を入力"
          onChange={(e) => this.props.onChange(e)}
        />
        <p className={style.textStyle}>駅で飲む</p>
      </div>
    )
  }
}

export default InputStation;
