import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class HandInput extends Component {
  render() {
    return (
<div className="page">

			<p className="margin45"></p>
			<Nav NavTitle="nav border" NavName="手绘答案">
					<div className="icon"></div>
			</Nav>
			<div className="content">
				<p className="margin70"></p>
				<p className="margin70"></p>
				<p className="margin70"></p>
				<p className="margin70"></p>
				<p className="margin70"></p>
				<p className="margin70"></p>
				<p className="margin70"></p> 
				  <div className="confirmbtn">
						<span className="per45">添加一页</span>					
						<span className="per45"><Link to="/handpainted5">查看题目</Link></span>	
				  </div>   
				  <div className="confirmbtn">
					<span className="per30">上一页</span>
					<span className="per30">下一页</span>	
					<span className="per30"><Link to="/handpainted5">完成</Link></span>					
				  </div>
				  <p className="margin45"></p>
			</div>
		</div>
        );
  }
}
        export default HandInput;