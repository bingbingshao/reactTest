import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import VideoMenu from '../component/VideoMenu.js';
import BookMenu from '../component/BookMenu.js';
import{
	NavLink,
	Route
}from 'react-router-dom'
class Favbook extends Component {
	replace = (e,w) => {	
		e.preventDefault()
	 	this.props.history.replace(w)
	}
  render(){
  	return (
	  		<div className="page">
	  			<Nav NavTitle="nav noborder" back={this.props} backto="/news/my" NavLeft="fa fa-chevron-left" NavName="收藏">
					<div className="icon"></div>
				</Nav>
				<p className="margin45"></p>
				<div className="collectchoice">
					<NavLink exact to="/favbook" className="choiced" activeClassName="choiced checked"
					onClick={(e)=>this.replace(e,"/favbook")}>书本收藏</NavLink>		
					<NavLink to="/favbook/video" className="choiced" activeClassName="choiced checked"
					onClick={(e)=>this.replace(e,"/favbook/video")}>视频收藏</NavLink>
				</div>
				<div className="content">
					<FilterList/>
					<Route exact path="/favbook" component={BookMenu}/>
					<Route path="/favbook/video" component={VideoMenu}/>
				</div>
				
			</div>
  		);
  }
}

export default Favbook;