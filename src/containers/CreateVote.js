import React, { Component } from 'react';

import InputStation from "./../components/InputStation";
import SelectDay from "./../components/SelectDay";
import CondButton from "./../components/CondButton";
import RectButton from "./../components/RectButton";
import UsersList from "./../components/UsersList";

import color from "./../color";
import style from "./style/CreateVote.css";

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

        <div className={style.selectDayDivStyle}>
          <SelectDay />
        </div>

        <div className={style.condButtonDivStyle}>
          <div className={style.condButtonStyle}>
            <CondButton text="個室あり"/>
          </div>
          <div className={style.condButtonStyle}>
            <CondButton text="飲み放題あり"/>
          </div>
          <div className={style.condButtonStyle}>
            <CondButton text="食べ放題あり"/>
          </div>
        </div>

        <div className={style.userListDivStyle}>
          <UsersList />
        </div>

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

export default CreateVote;
