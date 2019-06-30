import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import TeacherIntro from '../component/TeacherIntro.js';
class  Teacherteam extends Component {
constructor(){
	super();
	this.state={pos:0}
	this.topmenuitem=[{name:'全部'},
	{name:'初级教师'},{name:'中级教师'},
	{name:'高级教师'},{name:'特级教师'}]
}
clickMenuitem=(e)=>{
	var pos = e.target.getAttribute('data-key');
	this.setState({pos:pos});
}
  render() {
    return (
     <div className="page">
		 <Nav NavTitle="nav border" back={this.props} backto="/news/microweb" NavLeft="fa fa-chevron-left" NavName="教师团队">
            <div className="icon"></div>
        </Nav>	
			<p className="margin45"></p>
			<div className="topmenu" onClick={this.clickMenuitem}>
				{
					this.topmenuitem.map((name,i)=>{
						if(this.state.pos==i){
							return(<div key={i} className="topmenuitem nobordershow" data-key={i}>{name.name}</div>)
						}else{
							return(<div key={i} className="topmenuitem" data-key={i}>{name.name}</div>)
						}
					})
				}
			</div>	
			<div className="schoolindex">
				<div className="mod">
					<TeacherIntro/>
					<TeacherIntro/>
					<TeacherIntro/>
					<TeacherIntro/>
				</div>
			</div>
		</div>
    );
  }
}

export default  Teacherteam;