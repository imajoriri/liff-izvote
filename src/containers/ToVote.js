import React, { Component } from 'react';
import { connect } from 'react-redux'
import { parse } from 'query-string';

import Header from "./../components/Header";
import RectButton from "./../components/RectButton";
import PageTopYelButton from "./../components/PageTopYelButton";
import IzakayaList from "./../components/IzakayaList";
import Izakaya from "./../components/Izakaya";
import Loading from "./../components/Loading";

import color from "./../color";
import style from "./style/ToVote.css";
import store from "./../store";

// action
import {
  fetchData,
  clickIzakaya,
  updateVoteData,
  openDetailPage,
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
    var state = store.getState().toVote;

    // 居酒屋の情報一つ一つを合わせたもの
    if(state.plan.shops){
      var shops = state.plan.shops;

      var IzakayaList = Object.keys(shops).map( i => {
        return(
          <Izakaya 
            name={shops[i].name}
            imgURL={shops[i].imgURL}
            budget={shops[i].budget}
            pr_short={shops[i].pr_short}
            url_mobile={shops[i].url_mobile}
            isChecked={state.vote.indexOf(shops[i].id) >= 0 ? true : false}
            onClickCircle={(shopId) => this.props.clickIzakaya(shops[i].id)}
            onClickDetail={(url) => this.props.openDetailPage(shops[i].url_mobile)}
          />
        )
      });
    }

    return(
      <div>

        <Loading isLoading={state.isLoading}/>

        <div>
          <Header text={state.plan.station}/>
        </div>

        <div className={style.toResultVoteButtonDivStyle}>
          <PageTopYelButton
            text="現在の投票結果を確かめる" 
            to="/ResultVote"
          />
        </div>

        <div className={style.izakayaListDivStyle}>
          {IzakayaList}
        </div>

        <div className={style.finishButtonDivStyle}>
          <RectButton 
            text="完了" 
            enablePush={state.vote.length > 0 ? true : false}
            onClick={(e) => this.props.updateVoteData(e)}
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
    clickIzakaya: (shopId) => dispatch(clickIzakaya(shopId)),
    updateVoteData: (e) => dispatch(updateVoteData(e)),
    openDetailPage: (url) => dispatch(openDetailPage(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToVote);
