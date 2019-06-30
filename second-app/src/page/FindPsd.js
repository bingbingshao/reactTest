import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class FindPsd extends Component {
  render() {
    return (
      <div className="page">
			<Nav back={this.props} NavTitle="nav border" NavLeft="fa fa-chevron-left" NavName="找回密码" backto="/login" >
            <div className="icon"></div>
        </Nav>		
			<p className="margin45"></p>
			<div className="form">
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-mobile" id="blue1"></div>
					</div>
					<input type="text" placeholder="手机号" ></input>
				</div>
				
				<div className="formitem">
					<div className="formlabel">验证码：</div>
					<input type="text"></input>
					<div className="formbtn">验证码：</div>
				</div>
				
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-key" id="orange1"></div>
					</div>
					<input type="text" placeholder="新密码" ></input>
				</div>
				
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-key" id="black2"></div>
					</div>
					<input type="text" placeholder="确认密码" ></input>
				</div>			
			</div>
			<p className="margin45"></p>
			<p className="margin70"></p>
			<Link to="/news" className="confirmbtn">
				<span className="height40">确定</span>
			</Link>
		</div>
    );
  }
}

export default FindPsd;
