import React, { Component } from 'react';

import Header from "./../components/Header";
import PageTopYelButton from "./../components/PageTopYelButton";
import Ranking from "./../components/Ranking";

import style from "./style/ResultVote.css";
class ResultVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <Header />
        </div>

        <div className={style.toVotePageButtonDivStyle}>
          <PageTopYelButton
            text="投票画面に戻る" 
          />
        </div>

        <div>
          <Ranking />
        </div>

      </div>
    )
  }
}

export default ResultVote;
