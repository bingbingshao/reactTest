import React, { Component} from 'react';
import Nav from '../component/Nav.js';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import{
	Link
} from 'react-router-dom'
class Unit extends Component {
  render() {
    return (
        <div className="page">
	        <Nav NavTitle="nav noborder" back={this.props} backto="/AddOrder" NavLeft="fa fa-chevron-left" NavName="频道列表">
				<div className="icon"></div>
			</Nav>
			<p className="margin45"></p>
			<div className="list">
				<div className="listtitle height40">
					<span className="textb1-14">上海交通大学</span>
				</div>
				<div className="listitem">
					<div className="icon">
                    <img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>学生处宣传信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学就业处信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学招生信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>学生处宣传信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学就业处信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学招生信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>学生处宣传信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学就业处信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>上海交通大学招生信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>
				<div className="listitem">
					<div className="icon">
						<img src={require("../css/image/check.jpg")}/>
					</div>
					<div className="listtext">
						<span>学生处宣传信息频道</span>
					</div>
					<Link to="/unorder" className="icon">
						<div className="fa fa-angle-right"></div>
					</Link>
				</div>			
			</div>			
		</div>	
    );
  }
}
export default Unit ;