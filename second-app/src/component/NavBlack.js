import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NavBlack extends Component {
    back = (e) => {	
		e.preventDefault()
	  this.props.back&&this.props.back&&  this.props.back.history.push(this.props.backto)
	}
  render() {
    return (
        <div className="navblack">
            <div onClick={this.back} className="icon">
                <div className="fa fa-chevron-left"></div>
            </div>
            <div>{this.props.NavName}</div>
            {this.props.children}
        </div>
    );
  }
}

export default NavBlack;