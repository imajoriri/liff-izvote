import React, { Component } from 'react';

import InputStation from "./../components/InputStation";
import SelectDay from "./../components/SelectDay";
import CondButton from "./../components/CondButton";
import RectButton from "./../components/RectButton";
import UsersList from "./../components/UsersList";

import color from "./../color";

var topDivStyle = {
  margin: "0 10px",
}

var inputStationDivStyle = {
  marginTop: "30px",
}

var selectDayDivStyle = {
  marginTop: "30px",
}

var condButtonDivStyle = {
  marginTop: "30px",
  marginBottom: "20px",

  display: "flex",
  flexDirectio: "row",
  justifyContent: "space-between",
}

var rectButtonDivStyle = {
  marginTop: "30px",
  position: "fixed",
  bottom: 0,
  width: "95%",
  padding: "5px 0",
  backgroundColor: "white",
}

var condButtonStyle = {
  width: "30%",
}

var userListDivStyle = {
  marginTop: "10px",
  marginBottom: "50px",

  borderTop: "solid 1px" + color.main1,
}

class CreateVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={topDivStyle}>
        <div style={inputStationDivStyle}>
          <InputStation />
        </div>

        <div style={selectDayDivStyle}>
          <SelectDay />
        </div>

        <div style={condButtonDivStyle}>
          <div style={condButtonStyle}>
            <CondButton text="個室あり"/>
          </div>
          <div style={condButtonStyle}>
            <CondButton text="飲み放題あり"/>
          </div>
          <div style={condButtonStyle}>
            <CondButton text="食べ放題あり"/>
          </div>
        </div>

        <div style={userListDivStyle}>
          <UsersList />
        </div>

        <div style={rectButtonDivStyle}>
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
