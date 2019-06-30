import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
	Link
}from 'react-router-dom'
class StudentList extends Component {
  render() {
    return (
        <div className="page">
			  <Nav NavTitle="nav noborder" back={this.props} backto="/ClassList" NavLeft="fa fa-chevron-left" NavName="学生列表">
				<div className="icon"></div>
			</Nav>
			 <p className="margin45"></p>	
			<div className="form width100">
				<div className="formitem">
					<span>班级：</span>
					<select> 
						<option selected="selected" className="show">【一年级】一班</option> 
						<option>【一年级】二班</option> 
						<option>【一年级】三班</option>
					</select>									
				</div>
				<div className="formitem">
					<span>学号：</span>
					<input className="margin10" type="text" placeholder="学号" ></input>
				</div>
				<div className="formitem">
					<span>姓名：</span>
					<input className="margin10" type="text" placeholder="输入姓名" ></input>
					<div className="searchbtn2">查询</div>		
				</div>
			</div>
			
			<div className="stulist">				
				<div className="stulistrow">
					<div className="name">姓名</div>
					<div className="num">学号</div>
					<div className="grade">年级</div>
				</div>
				<div className="stulisttable">   
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>					
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
					<Link to="/studentindex" className="stulistrow">
						<div className="name td">张安</div>
						<div className="num td">2525525</div>
						<div className="grade td">【一年级】一班</div>
					</Link>
				</div>
			</div>
		</div>
    );
  }
}
export default StudentList;