import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

var divStyle = {
}

// 駅入力フォームのinput
var inputStyle = () => {
  return {
    width: "100%",
    border: "none",
    borderBottom: "black solid 2px",
    outline: "0", // 入力中のborderを消す

    fontSize: "26px",
  }
}

var textColStyle = {
  padding: "0",
}

var textStyle = {
  fontSize: "18px",
}

class InputStation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={divStyle}>
        <Row className="InputStation" >
          <Col xs={9}>
            <input type="text" style={inputStyle()} />
          </Col>
          <Col xs={3} style={textColStyle}>
            <p style={textStyle}>駅で飲む</p>
          </Col>
        </Row>
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
