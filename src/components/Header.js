import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";

import style from "./style/Header.css";

class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={style.divStyle}>
        <p className={style.stationPStyle}>{this.props.text}</p>
      </div>
    )
  }
}

export default Header
