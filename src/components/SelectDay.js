import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';

import color from "./../color";
import style from "./style/SelectDay.css";

class SelectDay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Row>
        <Col xs={12} xsOffset={0}>
          <select className={style.selectStyle}>
            <option value="9to12">9:00-12:00</option>
          </select>
        </Col>
      </Row>
    )
  }
}

export default SelectDay;
