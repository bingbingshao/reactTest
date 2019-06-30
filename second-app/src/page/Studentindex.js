import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class Studentindex extends Component {
  render(){
		  	return (
		  		<div className="page">
		  		<Nav NavTitle="nav noborder" back={this.props} backto="/studentlist" NavLeft="fa fa-chevron-left" NavName="学生首页">
					<div className="icon"></div>
				</Nav>
				<p className="margin45"></p>
				<div className="texttype">
					<div><p>26</p>收藏试题</div>
					<div className="line"></div>
					<div><p>15</p>我的记录</div>
					<div className="line"></div>
					<div><p>20</p>我的错题</div>
				</div>
				<div className="greypart">
					<div className="stuselect">
						<select> 
							<option selected="selected" className="show">刘多山</option> 
							<option>朱安</option> 
							<option>舒文学</option>
						</select>
					</div>
					
					<div className="stumenu">
						<div className="stumenuitems red">
							<div className="stumenuicon red">
								<div className="fa fa-file-text-o"></div>
							</div>
							<span>可参加考试列表</span>
						</div>
						<div className="stumenuitems green">
							<div className="stumenuicon green">
								<div className="fa fa-calendar-check-o"></div>
							</div>				
							<span>已参加考试列表</span>
						</div>
						<div className="stumenuitems purple">
							<div className="stumenuicon purple">
								<div className="fa fa-calendar-check-o"></div>
							</div>
							<span>错题集</span>
						</div>
							
						<div className="stumenuitems orange">
							<div className="stumenuicon orange">
								<div className="fa fa-calendar"></div>
							</div>
							<span>学习日志</span>
						</div>
							
						<div className="stumenuitems brown">
							<div className="stumenuicon brown">
								<div className="fa fa-exclamation-circle"></div>
							</div>
							<span>薄弱知识点</span>
						</div>
							
						<div className="stumenuitems blue">
							<div className="stumenuicon blue">								
								<img src={require("../css/image/task.jpg")}  alt="加载失败"/>
								<span>今日作业</span>
							</div>				
						</div>
					</div>			
				</div>
			</div>
  		);
  }
}

export default Studentindex;