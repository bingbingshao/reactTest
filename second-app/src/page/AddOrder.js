import React, { Component } from 'react';
import Nav from '../component/Nav.js';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import{
	Link
}from 'react-router-dom'
class AddOrder extends Component {
  render() {
    return (
        <div className="page">			
			<Nav NavTitle="nav noborder" back={this.props} backto="/order" NavLeft="fa fa-chevron-left" NavName="添加订阅">
				<div className="icon"></div>
			</Nav>
			<p className="margin45"></p>
			<div className="list">
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>上海交通大学（<div className="tip">本单位名称</div>）</span>	
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
			</div>
			
			<div className="list">
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>北京清华大学</span>
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>南京大学</span>
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>上海复旦大学</span>					
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>南京大学</span>	
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>南京大学</span>	
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>上海复旦大学</span>
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>	
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>安徽师范大学</span>
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>		
				<div className="listitem">
					<div className="icon">
						<div className="fa fa-graduation-cap"></div>
					</div>
					<div className="listtext">
						<span>上海电机学院</span>
					</div>
					<Link to="/unit" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>		
			</div>					
		</div>		
    );
  }
}
export default AddOrder;