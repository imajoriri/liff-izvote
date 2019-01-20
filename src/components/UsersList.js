import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";
import style from "./style/UsersList.css";

class UsersList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var user = [1, 2, 3, 4, 3,3,3,3,3].map( i => 
      <div className={style.userDivStyle} onClick={() => alert('YY')}>
        <div className={style.checkedButton}>
        </div>

        <img src="https://pbs.twimg.com/profile_images/1081383350986727426/4eX7vTcr_400x400.jpg" 
          className={style.profileImgStyle}/>

          <p className={style.profileNameStyle}>imajo</p>
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
