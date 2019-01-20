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
    return(
        <button className={style.buttonStyle}>
          {this.props.text}
        </button>
    )
  }
}

export default CondButton;
