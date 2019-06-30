import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
class Register extends Component {
  render() {
    return (
      <div className="page">
	  	<Nav back={this.props} NavTitle="nav border" NavLeft="fa fa-chevron-left" NavName="注册" backto="/login">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="form">
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-mobile" id="blue1"></div>
					</div>
					<input type="text" placeholder="手机号"></input>
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
					<input type="text" placeholder="密码" ></input>
				</div>
				
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-key" id="black2"></div>
					</div>
					<input type="text" placeholder="重复密码" ></input>
				</div>
				
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-reddit" id="green2"></div>
					</div>
					<input type="text" placeholder="昵称" ></input>
				</div>
				
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-group" id="green2"></div>
					</div>
					<select> 
						<option selected="selected" className="show">请选择登录角色</option> 
						<option>老师</option> 
						<option>学生</option>
						<option>家长</option>
					</select>	
				</div>
			</div>
			<p className="margin45"></p>			
			<Link to="/news" className="confirmbtn">
				<span className="height40">注册</span>
			</Link>
		</div>
    );
  }
}

export default Register;
