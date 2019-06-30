import React, { Component } from 'react';
import {
  Link,  
} from 'react-router-dom';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class Nav extends Component {
  back = (e) => {	
    if(this.props.backhistory){
      e.preventDefault()
      this.props.backhistory();
    }else{
      e.preventDefault()
	  this.props.back&&this.props.back&&  this.props.back.history.push(this.props.backto)
    }
	}

  render() {
    return (
    <div className={this.props.NavTitle}>
        <div onClick={this.back} className="icon">
            <div className={this.props.NavLeft}></div>
        </div>
        <div className="textb2-16">{this.props.NavName}</div>
        {this.props.children}
    </div>
    );
  }
}

export default Nav;

