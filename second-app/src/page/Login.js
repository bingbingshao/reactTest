import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import LoginModel from '../model/Login/LoginModel'
import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch
} from 'react-router-dom'

class Login extends Component {
	constructor(){
		super();
		this.state={roles:[],info:''}
	}
	componentDidMount() {
		LoginModel.findRoleList({},(json)=>{this.setState({roles:json.infos})},(json)=>{});
		console.log();
	}
	success=(json)=>
	{
		LoginModel.sprole({pid:json.userId},
			(json1)=>{
				var rid = this.role.value;
				//alert("rid:"+rid+"  ,rids:"+json1.infos[0].rids);
				if(json1.infos[0].rids.indexOf(rid)>=0){
					this.props.history.push('/news');
				}
				else{
					this.setState({info:'用户名、密码或者角色选择错误！'});
				}
			},
			(json)=>{});
	}
		fail=(json)=>
	{
		alert("失败"+JSON.stringify(json));
	}
	click=(e)=>{
		//	e.stopPropagation();
			var param={username:this.username.value,password:this.password.value};
			LoginModel.login(param,this.success,this.fail);
	}
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav border" NavName="登录">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="form">
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-user" id="blue1"></div>
					</div>
					<input type="text" placeholder="账号" ref={(input)=>this.username=input}></input>
				</div>
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-key" id="orange1"></div>
					</div>
					<input type="password" placeholder="密码" ref={(input)=>this.password=input}></input>
				</div>
				<div className="formitem">
					<div className="icon">
						<div className="fa fa-group" id="green2"></div>
					</div>
					
					<select defaultValue='123' ref={(input)=>this.role=input}> 
						<option  className="show">请选择登录角色</option> 
						{
							this.state.roles.map((data,i)=>{
								return (<option value={data.id}>
									{data.title}
									</option>);
							})
		
						}
					</select>			
				</div>
			</div>
			
			<div className="widget">
				<Link to="/register"><div>免费注册</div></Link>
				<Link to="/findpsd"><div>忘记密码？</div></Link>
			</div>
			<div className="widget">
				<div style={{color:'#f00'}}>{this.state.info}</div>
			</div>
			<p className="margin45"></p>	
					
			<div to="/news" className="confirmbtn" onClick={this.click}>
				<span className="height40">登录</span>
			</div>
		</div>		
    );
  }
}

export default Login;
