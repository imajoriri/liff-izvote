import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/RankingBig.css";

class RankgingBig extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className={style.bigIzakayaDiv}>
        <div className={style.bigIzakayaNameDiv}>
          <a href={this.props.urlMobile}>{this.props.name}</a>
          <p>{this.props.ratio}</p>
        </div>

        {/*
        <div className={style.bigIzakayaNumDiv}>
          <div className={style.bigIzakayaNumCircle}>
            <p>1</p>
          </div>
        </div>
        */}

        <div className={style.bigIzakayaImgDiv}>
          <img src={this.props.imgURL} />
        </div>

        <div className={style.bigIzakayaDetailDiv}>
          <p>{this.props.prShort}</p>
        </div>

      </div>
    )

  }
}

export default RankgingBig;

