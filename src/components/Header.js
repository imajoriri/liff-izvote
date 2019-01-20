import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";

var divStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: color.main1,
  // 左右揃える
  textAlign: "center",
  // 上下揃えるために
  display: "table",

}

var stationPStyle = {
  margin: 0,
  display: "table-cell",
  // 上下揃えるために
  verticalAlign: "middle",
  // 文字サイズ
  fontSize: "22px",
}

class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={divStyle}>
        <p style={stationPStyle}>新宿(12/11)</p>
      </div>
    )
  }
}

export default Header
