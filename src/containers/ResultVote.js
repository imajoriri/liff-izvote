import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from "./../components/Header";
import PageTopYelButton from "./../components/PageTopYelButton";
import Ranking from "./../components/Ranking";

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
    var state = store.getState().toVote;

    return(
      <div>
        <div>
          <Header />
        </div>

        <div className={style.toVotePageButtonDivStyle}>
          <PageTopYelButton
            text="投票画面に戻る" 
            to={"/ToVote?planId=" + state.planId}
          />
        </div>

        <div>
          <Ranking />
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
    fetchData: (e) => dispatch(fetchData(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultVote);
