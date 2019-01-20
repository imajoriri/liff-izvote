import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/Ranking.css";

class Rankging extends Component {
  constructor(props){
    super(props);
  }

  render(){

    var big = createBigIzakayaComponent();
    var small = createSmallIzakayaComponent();

    return(
      <div>
        {big}
        {small}
      </div>
    )
  }
}

export default Rankging;

function createBigIzakayaComponent(){
  
  // ランキングのトップ。枠が一番大き
  var top = [1].map( i => {
    return(
      <div className={style.bigIzakayaDiv}>
        <div className={style.bigIzakayaNameDiv}>
          <p>あじわい 個室居酒屋<br/>(11/14人)</p>
        </div>

        <div className={style.bigIzakayaNumDiv}>
          <div className={style.bigIzakayaNumCircle}>
            <p>1</p>
          </div>
        </div>

        <div className={style.bigIzakayaImgDiv}>
          <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" />
        </div>

        <div className={style.bigIzakayaDetailDiv}>
          <p>2名～最大100名様まで全席個室でご案内しております。友人との飲み会から大切な接待迄…もっとみる</p>
        </div>

      </div>
    )
  });

  return top;

}

function createSmallIzakayaComponent(){
  
  // ランキングのトップ。枠が一番大き
  var small = [1, 2].map( i => {
    return(
      <div className={style.smallIzakayaDiv}>
        <div className={style.smallIzakayaNameDiv}>
          <p>あじわい 個室居酒屋</p>
        </div>

        <div className={style.smallIzakayaNumDiv}>
          <div className={style.smallIzakayaNumCircle}>
            <p>1</p>
          </div>
        </div>

        <div className={style.smallIzakayaImgDiv}>
          <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" />
        </div>

        <div className={style.smallIzakayaDetailDiv}>
          <p className={style.smallIzakayaRatio}>11/12</p>
          <p>2名～最大100名様まで全席個室でご案内しております。友人との飲み会から大切な接待迄…もっとみる</p>
        </div>

      </div>
    )
  });

  return small;

}
