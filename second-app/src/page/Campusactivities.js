import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class  Campusactivities extends Component {
  render() {
    return (
     <div className="page">
		 <Nav NavTitle="nav border" back={this.props} backto="/news/microweb" NavLeft="fa fa-chevron-left" NavName="校园动态">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
				<div className="indeximg">
					<img src={require("../css/image/dongtai1.jpeg")} className="show" alt="加载失败"/>
					<img src={require("../css/image/dongtai2.jpeg")} alt="加载失败"/>
					<img src={require("../css/image/dongtai3.jpeg")} alt="加载失败"/>
					<img src={require("../css/image/dongtai4.jpeg")} alt="加载失败"/>
				</div>		
				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">数计学院扎实推进就业实习实训基地建设</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>

				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">经济管理学院2017年“向快乐进发”双迎晚会</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>	
				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">数计学院扎实推进就业实习实训基地建设</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>

				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">经济管理学院2017年“向快乐进发”双迎晚会</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>	
				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">数计学院扎实推进就业实习实训基地建设</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>

				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">经济管理学院2017年“向快乐进发”双迎晚会</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>	
				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">数计学院扎实推进就业实习实训基地建设</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>

				<Link to="/activedetail" className="submod">
					<div className="cell">	
						<div className="fa fa-circle"></div>
						<div className="contenttext textb1-14">	
							<p className="color2">经济管理学院2017年“向快乐进发”双迎晚会</p>
						</div>	
					</div>
					<div className="cell">
						<div className="cellnote">							
						</div>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
				</Link>	
		
				<div className="iconspinner">
					<div className="fa fa-spinner fa-spin" ></div>
				</div>
				</div>
	
    );
  }
}

export default  Campusactivities;