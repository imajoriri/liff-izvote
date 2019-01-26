import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";

import style from "./style/IzakayaList.css";

class IzakayaList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return(
      <div className={style.izakayaDivStyle}>
        <div className={style.izakayaImgDivStyle} >
          <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" 
            className={style.izakayaImgStyle} />

          </div>

          <div className={style.izakayaInfoDivStyle} >
            <div className={style.izakayaNameDivStyle} >
              <p className={style.izakayaNamePStyle}>一休 新宿店 (~3000)</p>
            </div>
            <div >
              <p className={style.izakayaDetailPStyle}>
                この居酒屋は、美味しい料理が合って、月曜日がとてもやすくなっています。さらに...
                <a href="">
                  もっと見る
                </a>
              </p>
            </div>
          </div>

          <div className={style.checkButtonDivStyle} >
            <span className={style.checkButtonStyle}>
            </span>
          </div>
        </div>
    )

  }
}

export default IzakayaList;
