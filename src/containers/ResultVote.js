import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from "./../components/Header";
import PageTopYelButton from "./../components/PageTopYelButton";
import RankingBig from "./../components/RankingBig";
import RankingSmall from "./../components/RankingSmall";

import style from "./style/ResultVote.css";
import store from "./../store";

import {
  fetchData,
} from "./../actions/resultVote";

class ResultVote extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchData();
  }

  render(){
    // TODO
    // resultVoteに変える。
    // planIdもresultvoteにいれる
    //var state = store.getState().toVote;
    var state = store.getState().resultVote;

    if(Object.keys(state.allUserVotes).length !== 0){
      var ranking = rankingComponent(state.allUserVotes, state.users, state.plan);
    }else{
      var ranking = <p>まだ投票がありません</p>
    }

    return(
      <div>
        <div>
          <Header text={state.plan.station}/>
        </div>

        <div className={style.toVotePageButtonDivStyle}>
          <PageTopYelButton
            text="投票画面に戻る" 
            to={"/ToVote?planId=" + state.planId}
          />
        </div>

        {ranking}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (e) => dispatch(fetchData(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultVote);

// ランキングのコンポーネントたちを作って返す
function rankingComponent(allUserVotes, users, plan){
  // alluservotesの数値をリストにして、大きい順にする
  var allUserVotesArray = Object.keys(allUserVotes).map(function (key) {return allUserVotes[key]})
  //alert(JSON.stringify(allUserVotes));
  allUserVotesArray.sort(function(a,b){
    if( a > b ) return -1;
    if( a < b ) return 1;
    return 0;
  });

  // No1を求める
  // find使って検索。shopIdを取得する
  var No1ShopId = Object.keys(allUserVotes).find( (key) => {
    if(allUserVotesArray[0] === allUserVotes[key]){
      delete allUserVotes[key]
      return true;
    }
  });
  var No1Shop = plan.shops[No1ShopId];
  var No1ShopRatio = "(" + String(allUserVotesArray[0]) + "/" + String(users.length) + ")人が選んでいます";
  // これ以降被らないように削除

  // 1番目以降
  // ここの配列分表示する
  var otherShopComponent = [1,1].map( (e, i) => {
    // 配列にもうないのに処理するとエラーが起きるため
    if(Object.keys(allUserVotes).length !== 0){

      var otherShopId = Object.keys(allUserVotes).find( (key) => {
        if(allUserVotesArray[i + 1] === allUserVotes[key]){
          delete allUserVotes[key]
          return true;
        }
      });
      var otherShop = plan.shops[otherShopId];
      //var otherShopRatio = "(" + String(allUserVotesArray[i + 1]) + "/" + String(users.length) + ")";
      var otherShopRatio = String(allUserVotesArray[i + 1]) + "人が選んでいます";

      return(
        <RankingSmall 
          name={otherShop.name}
          imgURL={otherShop.imgURL}
          prShort={otherShop.prShort}
          urlMobile={otherShop.urlMobile}
          ratio={otherShopRatio}
          budget={otherShop.budget}
        />
      )

    }
  });

  return(
    <div>
      <RankingBig
        name={No1Shop.name}
        imgURL={No1Shop.imgURL}
        prShort={No1Shop.prShort}
        budget={No1Shop.budget}
        urlMobile={No1Shop.urlMobile}
        ratio={No1ShopRatio}
      />

      {otherShopComponent}
    </div>
  )
}
