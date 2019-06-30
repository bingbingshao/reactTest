import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import FilterList from '../component/FilterList.js';
import Nav from '../component/Nav.js';
import{
	Link
}from'react-router-dom'
class LearnLog extends Component {
  render() {
    return (
        <div className="page">
	        <Nav NavTitle="nav noborder" back={this.props} backto="/studentmenu" NavLeft="fa fa-chevron-left" NavName="学习日志">
            <div className="icon"></div>
        </Nav>
			 <p className="margin45"></p>	
			 <div className="content">
			 <FilterList/>
			
				<img src={require("../css/image/format.png")} width="100%"></img>
				<div className="content">
					<div className="contenttext textb1-16 blank">
						<p>&nbsp;</p>
						<p>考试名称：六（1）班三科联赛</p>
						<p>考试时间：2016-11-22</p>						
						<p>考试得分率：76.7%</p>
						<p>&nbsp;</p>
					</div>									
				</div>
				<Link to="/stupaperoverview" className="confirmbtn">
					<span>
					 考试详情
					</span>
				</Link>
			</div>
		</div>
    );
  }
}
export default LearnLog;