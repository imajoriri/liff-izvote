import React, { Component } from 'react';

import InputStation from "./../containers/InputStation";

class CreateVote extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <InputStation />
      </div>
    )
  }
}

export default CreateVote;
