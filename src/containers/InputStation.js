import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

var divStyle = {
}

// 駅入力フォームのinput
var inputStyle = () => {
  return {
    width: "70%",
    border: "none",
    borderRadius: "0",
    borderBottom: "black solid 2px",
    outline: "0", // 入力中のborderを消す
    display: "inline-block",

    fontSize: "26px",
  }
}

var textColStyle = {
  padding: "0",
}

var textStyle = {
  fontSize: "18px",
  margin: 0,
  marginTop: "20px",
  display: "inline-block",
}

class InputStation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={divStyle}>
        <input type="text" style={inputStyle()} />
        <p style={textStyle}>駅で飲む</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //onChange: (e) => dispatch(registerMemo.onChange(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputStation)
