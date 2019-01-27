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
    var pr_short = this.props.pr_short;
    var prMax = 30;
    if(pr_short.length > prMax){
      pr_short = pr_short.slice(0, prMax);
    }
    var imgURL = this.props.imgURL;
    var budget = this.props.budget;
    var url_mobile = this.props.url_mobile;

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
            onClick={(e) => this.props.onClickCircle(e)}
          >
            <span className={this.props.isChecked ? style.checkButtonStyle : style.notCheckButtonStyle}>
            </span>
          </div>
        </div>
    )

  }
}

export default IzakayaList;
