import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import BottomMenu from '../component/BottomMenu.js';
import {
    Link
} from 'react-router-dom'
class Studentmenu extends Component {
  render(){
  	return (
  			<div className="page">
  				<Nav NavTitle="nav noborder" NavName="我的">
					<div className="icon"></div>
				</Nav>
				
				<p className="margin45"></p>
				<div className="myindex">					
					<img src={require("../css/image/myindex.jpeg")} alt="加载失败"/>
					<div className="head">						
						<img src={require("../css/image/head.jpeg")} alt="加载失败"/>
					</div>
					<div className="myindextext">
						<div>当时月下飘雪</div>
						<p>上海交通大学学生</p>
					</div>			
					<div className="icon">
						<div className="fa fa-reorder"></div>
					</div>
				</div>	
				<div className="listtitle height40">
					<span className="textb1-14">学生菜单</span>
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
						<Link to="/ableexam" className="schoolmenuitem">
							<div className="fa fa-list-ul" id="green1"></div>
							<span>可参加考试</span>
						</Link>
						<Link to="/joinexam" className="schoolmenuitem">
							<div className="fa fa-list" id="orange1"></div>
							<span>已参加考试</span>
						</Link>
						<Link to="/todaytask" className="schoolmenuitem">
							<div className="fa fa-list-alt" id="green2"></div>
							<span>今日作业</span>
						</Link>
						<Link to="/konwpoint" className="schoolmenuitem">
							<div className="fa fa-list-ol" id="red1"></div>
							<span>薄弱知识点</span>
						</Link>
					</div>
					<div className="subschoolmenu">
						<Link to="/errexam" className="schoolmenuitem">
							<div className="fa fa-edit" id="blue1"></div>
							<span>错题集</span>
						</Link>
						<Link to="/learnlog" className="schoolmenuitem">
							<div className="fa fa-university" id="green1"></div>
							<span>学习日志</span>
						</Link>
						<Link to="/examcollect" className="schoolmenuitem">
							<div className="fa fa-star-o pink"></div>
							<span>试题收藏</span>
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

export default Studentmenu;