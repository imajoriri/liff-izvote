import React, { Component } from 'react';

import Header from "./../components/Header";
import RectButton from "./../components/RectButton";
import PageTopYelButton from "./../components/PageTopYelButton";
import IzakayaList from "./../components/IzakayaList";

import color from "./../color";
import style from "./style/ToVote.css";

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

        <div className={style.toResultVoteButtonDivStyle}>
          <PageTopYelButton
            text="現在の投票結果を確かめる" 
          />
        </div>

        <div className={style.izakayaListDivStyle}>
          <IzakayaList />
        </div>

        <div className={style.finishButtonDivStyle}>
          <RectButton 
            text="完了" 
          />
        </div>

      </div>
    )
  }
}

export default ToVote;
