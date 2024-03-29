import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import BottomMenu from '../component/BottomMenu.js';
import {
    Link
} from 'react-router-dom'
class Teacher extends Component {
  render(){
  	return (
  		<div className="page">
  			<Nav NavTitle="nav noborder"  NavName="个人中心">
				<div className="icon"></div>
			</Nav>	
			<p className="margin45"></p>
			<div className="myindex">
				<img src={require("../css/image/myindex.jpeg")}  alt="加载失败"/>				
				<div className="head">
					<img src={require("../css/image/head.jpeg")}  alt="加载失败"/>
				</div>
				<div className="myindextext">
					<div>当时月下飘雪</div>
					<p>上海交通大学老师</p>
				</div>			
				<div className="icon">
					<div className="fa fa-reorder"></div>
				</div>
			</div>	
			<div className="listtitle height40">
				<span className="textb1-14">教师菜单</span>
			</div>
			<div className="schoolmenu margin1">
				<div className="subschoolmenu">
					<Link to="/message" className="schoolmenuitem">
						<div className="fa fa-commenting-o" id="green2"></div>
						<span>消息</span>
					</Link>
					<div className="schoolmenuitem">
						<div className="fa fa-eye" id="green1"></div>
						<span>浏览记录</span>
					</div>
					<Link to="/favbook" className="schoolmenuitem">
						<div className="fa fa-star" id="orange1"></div>
						<span>收藏</span>
					</Link>
					<Link to="/setting" className="schoolmenuitem">
						<div className="fa fa-cog green2"></div>
						<span>设置</span>
					</Link>
				</div>
				<div className="subschoolmenu">
					<Link to="/classlist" className="schoolmenuitem">
						<div className="fa fa-list-ol" id="red1"></div>
						<span>班级列表</span>
					</Link>
					<Link to="/testlist" className="schoolmenuitem">
						<div className="fa fa-file-text-o" id="green1"></div>
						<span>试卷管理</span>
					</Link>
					<Link to="/management" className="schoolmenuitem">
						<div className="fa fa-list-alt" id="green2"></div>
						<span>作业管理</span>
					</Link>			
					<div className="schoolmenuitem">
						<div></div>
						<span></span>
					</div>			
				</div>
			</div>
			<BottomMenu/>
		</div>  		
  	);
  }
}

export default Teacher;