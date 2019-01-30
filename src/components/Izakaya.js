import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";

import style from "./style/Izakaya.css";
import liff from "./../liff";

class IzakayaList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    var name = this.props.name;
    var prShort = this.props.prShort;
    var prMax = 30;
    if(prShort.length > prMax){
      prShort = prShort.slice(0, prMax);
    }
    var imgURL = this.props.imgURL;
    var budget = this.props.budget;
    var urlMobile = this.props.urlMobile;
    var station = this.props.station;
    var walk = this.props.walk;

    return(
      <div className={style.izakayaDivStyle}>
        <div className={style.izakayaImgDivStyle} >
          <img 
            src={imgURL} 
            className={style.izakayaImgStyle}
          />

          </div>

          <div className={style.izakayaInfoDivStyle} >
            <div className={style.izakayaNameDivStyle} >
              <p className={style.izakayaNamePStyle}>
                {name}
              </p>
            </div>

            <div className={style.izakayaBudgetDivStyle} >
              <p className={style.izakayaBudgetPStyle}>
                予算: {budget}円
              </p>
              <p className={style.izakayaWalkPStyle}>
                {station}から{walk}分
              </p>
            </div>

            <div >
              <p className={style.izakayaDetailPStyle}>
                <p onClick={(url) => this.props.onClickDetail(url)}>
                  もっと見る
                </p>
              </p>
            </div>
          </div>

          <div 
            className={style.checkButtonDivStyle}
          >
            <span 
              className={this.props.isChecked ? style.checkButtonStyle : style.notCheckButtonStyle}
              onClick={(e) => this.props.onClickCircle(e)}
            >
            </span>
          </div>
        </div>
    )

  }
}

export default IzakayaList;
