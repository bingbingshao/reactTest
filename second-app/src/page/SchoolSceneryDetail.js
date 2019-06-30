import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class SchoolSceneryDetail extends Component {
  render() {
    return (
      <div className="page">	
				<div className="blackpart">
					<Nav NavTitle="navblack" back={this.props} backto="/schooloverview/scenery" NavLeft="fa fa-chevron-left">
            <div className="icon"></div>
        </Nav>
					<p className="margin45"></p>
					<div className="pagenum">1/4</div>
					<div className="indeximg">
						<img src={require("../css/image/school1.jpeg")} alt="加载失败" className="show"></img>
						<img src={require("../css/image/newsimg2.jpeg")} alt="加载失败"></img>
						<img src={require("../css/image/newsimg3.jpeg")} alt="加载失败"></img>
						<img src={require("../css/image/newsimg4.jpeg")} alt="加载失败"></img>
					</div>		
					
					<div className="contentblack">
						<span><p>如果你无法简洁的表达你的想法，那只
						说明你还不够了解它。</p>
						<p>  -- 阿尔伯特·爱因斯坦如果你无法简洁的表
						达你的想法，那只说明你还不够了解它。</p>
						<p>如果你无法简洁的表达你的想法，那只
						说明你还不够了解它。</p>
						<p>如果你无法简洁的表达你的想法，那只
						说明你还不够了解它。</p>
						<p>如果你无法简洁的表达你的想法，那只
						说明你还不够了解它。</p></span>
					</div>
				</div>
		</div>
    );
  }
}

export default SchoolSceneryDetail;
