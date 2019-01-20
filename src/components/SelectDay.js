import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";

var selectStyle = {
  webkitAppearance: "none", // selectの設定をiosでできるように
  width: "100%",
  height: "40px",
  fontSize: "22px",

  border: "1px solid " + color.main1,
  borderRadius: "20px",
  outline: "0", // 入力中のborderを消す
  backgroundColor: "white",

  paddingLeft: "10px",
}

class SelectDay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Row>
        <Col xs={12} xsOffset={0}>
          <select style={selectStyle}>
            <option value="9to12">9:00-12:00</option>
          </select>
        </Col>
      </Row>
    )
  }
}

export default SelectDay;
