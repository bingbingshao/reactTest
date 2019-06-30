import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import {
	Link
} from 'react-router-dom';
class Management extends Component {
  render() {
    return (
        <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/teacher" NavLeft="fa fa-chevron-left" NavName="大作业列表">
				<div className="icon"></div>
			</Nav>
             <p className="margin45"></p>
            <FilterList/>
			<div className="list">	 
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
				<Link to="/bigtest" className="listitem">
					<div className="listtext">
						<span className="left16">1B&nbsp;第二单元&nbsp;测量主题my&nbsp;提高题3</span>
					</div>
					<div className="icon">
						<div className="fa fa-angle-right task"></div>
					</div>
				</Link>	
			</div>
			<div className="iconspinner">
				<div className="fa fa-spinner fa-spin" ></div>
				<span>玩命加载中（上拉）......</span>
			</div>
		</div>
    );
  }
}
export default Management;