import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import color from "./../color";
import style from "./style/PageTopYelButton.css";

class PageTopYelButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {/*
        <button className={style.buttonStyle}>
          {this.props.text}
        </button>
        */}
        <Link to={this.props.to} className={style.linkStyle}>
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default PageTopYelButton;
