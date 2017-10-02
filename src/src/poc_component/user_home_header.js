import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import circleIcon from "../images/circle.png";

export default class UserHomeHeader extends Component{

render(){
	return(
		<div className ="container" style={menu}>
<div className ="col-md-4 col-xs-4">
     <img style={avatar} src={circleIcon} alt={"circleIcon"}/>   
</div>
<div className ="col-md-8 col-xs-8">
 <p style={name}>Good evening</p>
 <p style={preferencetext} > Edit preferences</p>
</div>
</div>
     )
}
}

var preferencetext = {
    position: 'absolute',
    left: 45,
    top: 27,
    fontSize: 12,
    fontWeight: 'normal',
    color: "#FFF",
    marginTop: 3,
  };

var menu = {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#084891',
    padding: 5,
  };

var name= {
    position: 'absolute',
    left: 43,
    top: 5,
    fontSize: 20,
    fontWeight: 'normal',
    color: "#FFF"
  };

var avatar = {
    width: 40,
    height: 40,
  };

