import React, { Component } from 'react';
import { connect } from 'react-redux'

import color from "./../color";

var buttonStyle = (height, backgroundColor, textColor) => {
  return {
    width: "100%",
    height: height,
    border: "none",
    borderRadius: "10px",
    outline: "0", // 入力中のborderを消す

    fontSize: "24px",
    color: textColor,
    backgroundColor: backgroundColor,
  }
}

class RectButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button style={buttonStyle(
          this.props.height, 
          this.props.backgroundColor,
          this.props.textColor)}
        >
          {this.props.text}
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //onChange: (e) => dispatch(registerMemo.onChange(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RectButton)
