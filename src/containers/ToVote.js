import React, { Component } from 'react';

import Header from "./../components/Header";
import RectButton from "./../components/RectButton";
import IzakayaList from "./../components/IzakayaList";

import color from "./../color";

var toResultVoteButtonDivStyle = {
  width: "98%",
  padding: "5px",
}

var izakayaListDivStyle = {
  marginBottom: "60px",
}

var finishButtonDivStyle = {
  marginTop: "30px",
  position: "fixed",
  bottom: 0,
  width: "98%",
  padding: "5px 2px",
  backgroundColor: "white",
}

class ToVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <Header />
        </div>

        <div style={toResultVoteButtonDivStyle}>
          <RectButton 
            text="現在の投票結果を確かめる" 
            height="40px"
            backgroundColor={color.main2}
            textColor="black"
          />
        </div>

        <div style={izakayaListDivStyle}>
          <IzakayaList />
        </div>

        <div style={finishButtonDivStyle}>
          <RectButton 
            text="完了" 
            height="50px"
            backgroundColor={color.main1}
            textColor="white"
          />
        </div>

      </div>
    )
  }
}

export default ToVote;
