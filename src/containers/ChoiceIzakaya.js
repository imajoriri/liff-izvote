import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import request from 'superagent'
import store from "./../store";
import constant from "./../constant";

import {
  fetchGnaviDesignated,
  addDesignatedIdList,
} from "./../actions/createVote";

import Izakaya from "./../components/Izakaya";
import RectButton from "./../components/RectButton";
import Loading from "./../components/Loading";

import style from "./style/ChoiceIzakaya.css";

class ChoiceIzakaya extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchGnaviDesignated();
    
    // 画面一番下に来たら再度読み込み
    //window.addEventListener('scroll', () => {
    //  var doch = document.documentElement.scrollHeight; //ページ全体の高さ
    //  var winh = window.innerHeight; //ウィンドウの高さ
    //  var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置

    //  if (bottom <= window.pageYOffset) {
    //    //一番下までスクロールした時に実行
    //    this.props.fetchGnaviDesignated();
    //  }
    //});
  }

  finishChoiceIzakaya(){
    this.props.history.push("/");
  }


  render(){
    var createVoteState = store.getState().createVote;
    var shopDataList = createVoteState.shopDataList;

    var designatedIdList = createVoteState.designatedIdList;

    var IzakayaList = shopDataList.map( (element, index) => {
      return(
        <Izakaya 
          name={element.name}
          imgURL={element.image_url.shop_image1}
          budget={element.budget}
          prShort={element.pr.pr_short}
          urlMobile={element.url_mobile}
          station={element.access.station}
          walk={element.access.walk}

          onClickCircle={(shopId) => this.props.addDesignatedIdList(element.id)}
          isChecked={designatedIdList.indexOf(element.id) >= 0 ? true : false}
        />
      )
    });

    return(
      <div>
        <Loading isLoading={createVoteState.isLoading}/>

        {/* 画面上のテキスト */}
        <div>
          <p className={style.pageTopText1}>新宿でここだけは外せないお店</p>
          <p className={style.pageTopText2}>あと、{constant.maxDesignatedIdLength - designatedIdList.length}件</p>
        </div>

        {/* 居酒屋リスト */}
        <div className={style.izakayaListDivStyle}>
          {IzakayaList}
        </div>

        {/* 完了ボタン */}
        <div className={style.finishButtonDivStyle}>
          <RectButton 
            text={"完了" + (constant.maxDesignatedIdLength - designatedIdList.length)
            + "/" 
            + constant.maxDesignatedIdLength}
            enablePush={true ? true : false}
            onClick={() => this.finishChoiceIzakaya()}
          />
        </div>

        {/* もっと読み込む */}
        <div
          className={style.loadMoreDivStyle} 
          onClick={(e) => this.props.fetchGnaviDesignated(e)}
        >
          <p>もっと読み込む</p>
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
    fetchGnaviDesignated: (e) => dispatch(fetchGnaviDesignated(e)),
    addDesignatedIdList: (shopId) => dispatch(addDesignatedIdList(shopId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChoiceIzakaya));
