import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/RankingSmall.css";

class RankgingSmall extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className={style.smallIzakayaDiv}>
        <div className={style.smallIzakayaNameDiv}>
          <a href={this.props.url_mobile}>{this.props.name}</a>
        </div>

        {/*
        <div className={style.smallIzakayaNumDiv}>
          <div className={style.smallIzakayaNumCircle}>
            <p>1</p>
          </div>
        </div>
        */}

        <div className={style.smallIzakayaImgDiv}>
          <img src={this.props.imgURL} />
        </div>

        <div className={style.smallIzakayaDetailDiv}>
          <p className={style.smallIzakayaRatio}>
            {this.props.ratio}
          </p>
        {/*
          <p>{this.props.pr_short}</p>
        */}
        </div>

      </div>
    )

  }
}

export default RankgingSmall;

