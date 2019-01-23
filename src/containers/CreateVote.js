import React, { Component } from 'react';
import { connect } from 'react-redux'

import InputStation from "./../components/InputStation";
import SelectDay from "./../components/SelectDay";
import CondButton from "./../components/CondButton";
import RectButton from "./../components/RectButton";
import UsersList from "./../components/UsersList";

import color from "./../color";
import style from "./style/CreateVote.css";

import { changeCondition } from "./../modules/createVote";
import store from "./../store";

class CreateVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={style.topDivStyle}>
        <div className={style.inputStationDivStyle}>
          <InputStation />
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
              conditionVal={store.getState().privateRoom}
            />
          </div>
          <div className={style.condButtonStyle}>
            <CondButton 
              text="飲み放題あり" 
              onClick={this.props.changeCondition} 
              conditionName="bottomlessCup"
              conditionVal={store.getState().bottomlessCup}
            />
          </div>
          <div className={style.condButtonStyle}>
            <CondButton 
              text="食べ放題あり" 
              onClick={this.props.changeCondition} 
              conditionName="buffet"
              conditionVal={store.getState().buffet}
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
            text="作成する" 
            height="50px"
            backgroundColor={color.main1}
            textColor="white"
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
    changeCondition: (condition) => dispatch(changeCondition(condition)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVote);
