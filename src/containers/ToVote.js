import React, { Component } from 'react';
import { connect } from 'react-redux'
import { parse } from 'query-string';

import Header from "./../components/Header";
import RectButton from "./../components/RectButton";
import PageTopYelButton from "./../components/PageTopYelButton";
import IzakayaList from "./../components/IzakayaList";
import Izakaya from "./../components/Izakaya";

import color from "./../color";
import style from "./style/ToVote.css";

// action
import {
  fetchData,
} from "./../actions/toVote";

class ToVote extends Component{
  constructor(props){
    super(props);
  }

  // DOM作成が終わった後、
  // DBからPlan情報を取得、state.planに入れる
  // gnaviからお店情報を取得し、state.shopsに入れる
  componentDidMount(){
    // queryでplanId取得
    var query = parse(window.location.search);
    var planId = query.planId;

    // planモデルと、shop情報を取得
    this.props.fetchData(planId);
  }

  render(){

    // 居酒屋の情報一つ一つを合わせたもの
    var IzakayaList = [1,1,1].map( i => {
      return(
        <Izakaya />
      )
    });

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
          {IzakayaList}
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
const mapStateToProps = state => {
  return { state }
}
const mapDispatchToProps = dispatch => {
  return {
    //onChange: (e) => dispatch(onChange(e)),
    fetchData: (planId) => dispatch(fetchData(planId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToVote);
