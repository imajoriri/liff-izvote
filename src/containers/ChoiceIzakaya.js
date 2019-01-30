import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class ChoiceIzakaya extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        test
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceIzakaya);
