import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
	Link
}from 'react-router-dom'
class MessageDetail extends Component {
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/message" NavLeft="fa fa-chevron-left" NavName="消息公告">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="contenttitle border">
					<span className="textb1-18"><b>习近平主持政治局会议六中全会10月召开</b></span>
					<div className="cellnote">
						<div>发布人</div>
						<div>2017-7-12</div>
					</div>
				</div>				
				<div className="contenttext">		
					<p>&nbsp;</p>
					<img src={require("../css/image/contentimg.jpeg")} alt="加载失败" className="contentimg"></img>
				   <p>&nbsp;</p>
					 <span><p className="textb2-14 blank">12月14日，据@河南考古官方微博透露，
				   在河南一座楚墓发掘现场，考古人员现场挖出了几只装有“肉汤”大鼎，鼎内
				   骨头清晰可见。经专家鉴定，里面煮的都是牛的前肢！这是妥妥的几锅“牛肉
				   汤”啊。近日在河南一座古墓发掘现场，出土了几只装有“肉汤”大鼎，鼎内骨
				   头清晰可见。经专家初步鉴定，锅里煮的都是牛的前肢!这是妥妥的几锅“牛肉
				   汤”啊！</p></span>				 
				   <p className="margin45"></p>   
				</div>
			</div>
			<Link to="/addmessage" className="confirmbtn">
				<span className="green">编辑公告</span>
			</Link>
			<p className="margin45"></p>
		</div>
    );
  }
}

export default MessageDetail;
