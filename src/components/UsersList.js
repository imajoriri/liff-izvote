import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";

var userDivStyle = {
  display: "flex",
  padding: "10px 0",
  borderBottom: "solid 1px" + color.borderColor,
}

var checkedButton = () => {
  return {
    width: "33px",
    height: "33px",
    borderRadius: "50%",
    display: "inline-block",
    margin: "20px 10px 0 10px",

    border: "black 1px solid",
    backgroundColor: "white",
  }
}

var profileImgStyle = {
  width: "70px",
  height: "70px",
  //  position: "absolute",
  //  margin: "0 0 0 55px",
  borderRadius: "50%",
}

var profileNameStyle = {
  display: "inline-block",
  marginLeft: "10px",
  fontSize: "20px",
}

class UsersList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var user = [1, 2, 3, 4, 3,3,3,3,3].map( i => 
      <div style={userDivStyle} onClick={() => alert('YY')}>
        <div style={checkedButton()}>
        </div>

        <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" 
          style={profileImgStyle}/>

          <p style={profileNameStyle}>imajo</p>
        </div>
    );

    return(
      <div>
        {user}
      </div>
    )
  }
}

export default UsersList
