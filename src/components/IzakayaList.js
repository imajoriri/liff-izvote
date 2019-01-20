import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";

var izakayaDivStyle = {
  display: "flex",
  padding: "10px 0",
  borderBottom: "solid 1px" + color.borderColor,
}

// izakayaInfo
var izakayaImgDivStyle = {
  width: "30%",
  textAlign: "center",
}
var izakayaImgStyle = {
  width: "90px",
  height: "90px",
}

// izakayaInfo
var izakayaInfoDivStyle = {
  width: "50%",
}
var izakayaNameDivStyle = {
}
var izakayaNamePStyle = {
  margin: 0,
}
var izakayaDetailPStyle = {
  margin: 0,
  fontSize: "12px",
}
//checkbutton
var checkButtonDivStyle = {
  width: "20%",
}
var checkButtonStyle = () => {
  return{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "inline-block",
    margin: "20px 10px 0 15px",

    border: "black 1px solid",
    backgroundColor: "white",
  }
}

class IzakayaList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var izakaya = [1, 1,1,1,1,1].map( i => {
      return(
        <div style={izakayaDivStyle}>
          <div className="izakayaImgDiv" style={izakayaImgDivStyle}>
            <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" 
              style={izakayaImgStyle}/>

          </div>

          <div className="izakayaInfoDiv" style={izakayaInfoDivStyle}>
            <div className="izakayaNameDiv" style={izakayaNameDivStyle}>
              <p style={izakayaNamePStyle}>一休 新宿店 (~3000)</p>
            </div>
            <div className="izakayaDetailDiv">
              <p style={izakayaDetailPStyle}>
                この居酒屋は、美味しい料理が合って、月曜日がとてもやすくなっています。さらに...
              <a href="">
                もっと見る
              </a>
              </p>
            </div>
          </div>

          <div className="checkButtonDiv" style={checkButtonDivStyle}>
            <span style={checkButtonStyle()}>
            </span>
          </div>
        </div>
      )
    });

    return(
      <div>
        {izakaya}
      </div>
    )
  }
}

export default IzakayaList;
