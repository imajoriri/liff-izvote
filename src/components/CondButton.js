import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";

var buttonStyle = {
  width: "100%",
  height: "40px",
  fontSize: "14px",

  border: "1px solid " + color.main1,
  borderRadius: "20px",
  outline: "0", // 入力中のborderを消す
  backgroundColor: "white",

}

class CondButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
        <button style={buttonStyle} >
          {this.props.text}
        </button>
    )
  }
}

export default CondButton;
