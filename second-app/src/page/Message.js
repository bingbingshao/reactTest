import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
	Link
}from 'react-router-dom'

class Message extends Component {
  render(){
  	return (
  		<div className="page">
  			<Nav NavTitle="nav noborder" back={this.props} backto="/news/my" NavLeft="fa fa-chevron-left" NavName="消息公告"> 
			  	<Link to="addmessage" className="icon">
					<div className="fa fa-plus" id="blue1"></div>
				</Link>
			</Nav>
			<p className="margin45"></p>		
			<Link to="/messagedetail" className="message">
				<p className="height45 textb1-14">
					<b>习近平主持政治局会议六中全会10月召开</b>					
				</p>
				<div className="fa fa-trash-o"></div>
				<p>
					<span>张三</span>
					<span>2016-12-19</span>
					<span>12:33</span>
				</p>
				<div className="solid"></div>
				<p>
					<span className="fa fa-eye"></span>
					<span>300+阅读</span>
				</p>
			</Link>
			
			<Link to="/messagedetail" className="message">
				<p className="height45 textb1-14">
					<b>黄奇帆：重庆三年内将关掉1500加房地产公司</b>					
				</p>
				<div className="fa fa-trash-o"></div>
				<p>
					<span>张三</span>
					<span>2016-12-19</span>
					<span>12:33</span>
				</p>
				<div className="solid"></div>
				<p>
					<span className="fa fa-eye"></span>
					<span>300+阅读</span>
				</p>
			</Link>
			<Link to="/messagedetail" className="message">
				<p className="height45 textb1-14">
					<b>香港珠帘大桥22.9公里主桥今日贯通 能抗衡16...</b>					
				</p>
				<div className="fa fa-trash-o"></div>
				<p>
					<span>张三</span>
					<span>2016-12-19</span>
					<span>12:33</span>
				</p>
				<div className="solid"></div>
				<p>
					<span className="fa fa-eye"></span>
					<span>300+阅读</span>
				</p>
			</Link>
			<Link to="/messagedetail" className="message">
				<p className="height45 textb1-14">
					<b>马英九开课谈九二共识 透漏习马会幕后趣闻</b>					
				</p>
				<div className="fa fa-trash-o"></div>
				<p>
					<span>张三</span>
					<span>2016-12-19</span>
					<span>12:33</span>
				</p>
				<div className="solid"></div>
				<p>
					<span className="fa fa-eye"></span>
					<span>300+阅读</span>
				</p>
			</Link>
			<Link to="/messagedetail" className="message">
				<p className="height45 textb1-14">
					<b>习近平主持政治局会议六中全会10月召开</b>					
				</p>
				<div className="fa fa-trash-o"></div>
				<p>
					<span>张三</span>
					<span>2016-12-19</span>
					<span>12:33</span>
				</p>
				<div className="solid"></div>
				<p>
					<span className="fa fa-eye"></span>
					<span>300+阅读</span>
				</p>
			</Link>
		</div>
  		);
  }
}

export default Message;