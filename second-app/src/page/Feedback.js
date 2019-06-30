import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
	
}from 'react-router-dom'
class Feedback extends Component {
  render(){
  	return (
		<div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/setting" NavLeft="fa fa-chevron-left" NavName="意见反馈">
				<div className="icon"></div>
			</Nav>
			<p className="margin45"></p>
			<div className="mod">
				<div className="listtitle height40 suggest">
					<span className="textb1-14">问题类型</span>
					<select> 
						<option selected="selected" className="show">新需求意见</option> 
						<option>功能问题反馈</option> 
						<option>其他问题</option>
						<option></option>
						<option></option>
					</select>	
				</div>
				<div className="suggest">
					<textarea placeholder="请写下您宝贵的意见或建议"></textarea>			
				</div>
				<div className="listtitle height40 suggest">
					<span className="textb1-14">联系方式</span>
					<input placeholder="单行输入"></input>
				</div>
			</div>
			<p className="margin45"></p>
			<div className="confirmbtn">
				<span className="green">
					确定
				</span>
			</div>
			
		</div>
  		);
  }
}

export default Feedback;