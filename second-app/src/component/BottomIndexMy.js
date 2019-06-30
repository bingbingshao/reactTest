import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
	Link
} from 'react-router-dom'
class BottomIndexMy extends Component {
  render() {
    return (        
		<div className="bottomindex">			
			<Nav NavTitle="nav noborder" NavName="我的">
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
					<p>登录用户角色</p>
				</div>			
				<div className="icon">
					<div className="fa fa-reorder"></div>
				</div>
			</div>
			<div className="list">
				<Link to="/teacher" className="listitem">
					<div className="icon">
						<div className="fa fa-tachometer" id="red1"></div>
					</div>
					<div className="listtext">
						<span className="textb2-14">教师菜单</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right font24"></div>
					</div>
				</Link>
				<Link to="/parent" className="listitem">
					<div className="icon">
						<div className="fa fa-tachometer" id="orange1"></div>
					</div>
					<div className="listtext">
						<span className="textb2-14">家长菜单</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right font24"></div>
					</div>
				</Link>			
				<Link to="/studentmenu" className="listitem">
					<div className="icon">
						<div className="fa fa-tachometer" id="green1"></div>
					</div>
					<div className="listtext">
						<span className="textb2-14">学生菜单</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right font24"></div>
					</div>
				</Link>
			</div>
		</div>
    );
  }
}

export default BottomIndexMy;