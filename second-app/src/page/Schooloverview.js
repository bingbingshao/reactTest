import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import SchoolIndexIntro from '../component/SchoolIndexIntro.js';
import SchoolIndexScenery from '../component/SchoolIndexScenery.js';
import SchoolIndexRule from '../component/SchoolIndexRule.js';
import SchoolIndexCurrent from '../component/SchoolIndexCurrent.js';
import SchoolIndexPast from '../component/SchoolIndexPast.js';
import{
	NavLink,
	Route
}from 'react-router-dom'
class Schooloverview extends Component {
  render() {
    return (
    <div className="page">
		<Nav NavTitle="nav noborder" back={this.props} backto="/news/microweb" NavLeft="fa fa-chevron-left" NavName="学校概况">
					<div className="icon"></div>
			</Nav>	
		<p className="margin45"></p>
		<div className="topmenumove">							
			<NavLink exact to="/schooloverview" 
			className="moveitem" activeClassName="moveitem show">学校简介
			</NavLink>				
			<NavLink to="/schooloverview/scenery"
			className="moveitem" activeClassName="moveitem show">校园风光
			</NavLink>				
			<NavLink to="/schooloverview/rule"
			className="moveitem" activeClassName="moveitem show">规章制度
			</NavLink>						
			<NavLink to="/schooloverview/current"
			className="moveitem" activeClassName="moveitem show">现任领导
			</NavLink>								
			<NavLink to="/schooloverview/past" 
			className="moveitem" activeClassName="moveitem show">历任领导
			</NavLink>					
		</div>
		  <Route exact path="/schooloverview" component={SchoolIndexIntro}/>
		  <Route path="/schooloverview/scenery" component={SchoolIndexScenery}/>
			<Route path="/schooloverview/rule" component={SchoolIndexRule}/>
			<Route path="/schooloverview/current" component={SchoolIndexCurrent}/>
			<Route path="/schooloverview/past" component={SchoolIndexPast}/>		
	</div>
    );
  }
}

export default Schooloverview;