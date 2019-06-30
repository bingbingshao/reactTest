import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
}from 'react-router-dom'
class KonwPoint extends Component {
  render() {
    return (
        <div className="page">
           	<Nav NavTitle="nav noborder" back={this.props} backto="/studentmenu" NavLeft="fa fa-chevron-left" NavName="薄弱知识点">
							<div className="icon"></div>
					</Nav>
			 <p className="margin45"></p>	
			<div className="content">
				<img src={require("../css/image/week.png")} width="100%"></img>
				<div className="content">
					<div className="contenttext textb1-16 blank">
						<p>知识点：加减乘除</p>
						<p>答题数：8</p>
						<p>答错数目：7</p>
						<p>错误率：76.6%</p>
					</div>									
				</div>
				<Link to="/errexam" className="confirmbtn">
					<span>				
						查看错题集
					</span>					
				</Link>
			</div>
		</div>
    );
  }
}
export default KonwPoint;