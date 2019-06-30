import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
	Link
}from 'react-router-dom'
class Addmessage extends Component {
	replace = (e,w) => {	
		e.preventDefault()
	 this.props.history.replace(w)
	}
  render(){
  	return (
  		<div className="page">
  			<Nav NavTitle="nav noborder" back={this.props} backto="/message" NavLeft="fa fa-chevron-left" NavName="增加消息">
				<div className="icon"></div>
			</Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="inputtitle">
					<input type="text" placeholder="标题（必填）：4-40字" ></input>
				</div>
				<div className="inputcontent">
					<textarea placeholder="正文（必填）：15-500字"></textarea>
				</div>
				<div className="contenttext">
					<div className="uploadphoto">
						<div className="fa fa-plus"></div>
					</div>
				</div>
				
				<p className="margin45">&nbsp;</p>		
				<Link to="/message" onClick={(e)=>this.replace(e,"/message")} className="confirmbtn">
					<span className="green">
					增加消息
					</span>
				</Link>		
			</div>
		</div>
  		);
  }
}

export default Addmessage;