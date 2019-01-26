import React, { Component } from 'react';
import { connect } from 'react-redux'

import InputStation from "./../components/InputStation";
import SelectDay from "./../components/SelectDay";
import CondButton from "./../components/CondButton";
import RectButton from "./../components/RectButton";
import UsersList from "./../components/UsersList";
import Loading from "./../components/Loading";

import color from "./../color";
import style from "./style/CreateVote.css";

import { 
  changeCondition, 
  createPlan,
  onChange,
} from "./../actions/createVote";
import store from "./../store";

class CreateVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var state = store.getState().createVote;

    // 駅名を入力していない時にボタンの色を変えるための変数
    var enablePush;
    if(state.text){
      enablePush = true
    }else{
      enablePush = false
    }

    return(
      <div>
        <Loading isLoading={state.isLoading}/>

        <div>
          <div className={style.topDivStyle}>
            <div className={style.inputStationDivStyle}>
              <InputStation value={state.text} onChange={(e) => this.props.onChange(e)}/>
            </div>

            {/*
        <div className={style.selectDayDivStyle}>
          <SelectDay />
        </div>
            */}

            <div className={style.condButtonDivStyle}>
              <p>居酒屋の条件</p>
              <div className={style.condButtonStyle}>
                <CondButton 
                  text="個室あり" 
                  onClick={this.props.changeCondition} 
                  conditionName="privateRoom"
                  conditionVal={state.privateRoom}
                />
              </div>
              <div className={style.condButtonStyle}>
                <CondButton 
                  text="飲み放題あり" 
                  onClick={this.props.changeCondition} 
                  conditionName="bottomlessCup"
                  conditionVal={state.bottomlessCup}
                />
              </div>
              <div className={style.condButtonStyle}>
                <CondButton 
                  text="食べ放題あり" 
                  onClick={this.props.changeCondition} 
                  conditionName="buffet"
                  conditionVal={state.buffet}
                />
              </div>
            </div>

            {/*
        <div className={style.userListDivStyle}>
          <UsersList />
        </div>
            */}

            <div className={style.rectButtonDivStyle}>
              <RectButton 
                enablePush={enablePush}
                text="作成する" 
                onClick={(e) => this.props.createPlan(e)}
              />
            </div>
          </div>
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
    changeCondition: (condition) => dispatch(changeCondition(condition)),
    createPlan: (e) => dispatch(createPlan(e)),
    onChange: (e) => dispatch(onChange(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVote);