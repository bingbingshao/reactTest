import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
	Link
} from 'react-router-dom';
class HandAnswer extends Component {
  render() {
    return (
    <div className="page">
			<Nav NavTitle="nav border" NavName="手绘答案">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
		
			<div className="content">
				 <img className="main-img" width="100%" height="515px" src={require("../css/image/53.png")} alt="加载失败" />
				 <div className="confirmbtn">
					<span className="per30">上一页</span>
					<span className="per30">下一页</span>										
					<span className="per30">查看题目</span>							
				 </div>
				 <p className="margin45"></p>
			</div>
		</div>
         );
  }
}

export default HandAnswer;