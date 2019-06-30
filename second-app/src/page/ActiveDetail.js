import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class ActiveDetail extends Component {
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/campusactivities" NavLeft="fa fa-chevron-left" NavName="动态详情">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="contenttitle border">
					<span className="textb1-18"><b>数计学院扎实推进就业实习实训基地建设</b></span>
					<div className="cellnote">
						<div>2017-7-12</div>
						<div>18:09</div>
					</div>
				</div>
				<div className="contenttext textb2-14">					
				   <p>&nbsp;</p>
				   <p className="blank">为扎实推
				   进本科生就业实习工作开展，拓展学院就业市场。12月
				   15日，数计学院党委副书记喻娜、副院长李汪根、计算
				   机科学与技术系教师夏芸、软件工程系教师胡桂银、辅
				   导员代表一行赴苏州市开展本科生就业市场调研，扎实
				   推进学院就业实习实训基地建设，强化学院实习实训就
				   业一体化开展。</p>
				   <p className="blank">调研组首
				   先来到学思堂教育集团，调研该公司的教学理念、课程
				   设置、培训成效和师资队伍等。随后，调研组与学思堂
				   集团负责人、数计学院学思堂校友进行深入交流。座谈
				   会上，李汪根表示学思堂教育集团教育理念先进，拥有
				   良好的发展前景，也为数计学院毕业生提供了发展的机
				   遇和平台。本次调研主要是为了更好的了解就业市场动
				   态，并与学思堂建立合作关系，拓展学院毕业生就业渠
				   道。座谈会结束后，李汪根与学思堂教育连锁集团总经
				   理徐长春签订了《校企合作协议书》，并共同为“安徽
				   师范大学数学计算机科学学院就业实习实训基地”揭牌
				   。</p>
				</div>
         <img src={require("../css/image/dongtai4.jpeg")} alt="加载失败" className="contentimg"></img>
				<div className="contenttext textb2-14">
				   <p className="blank">下午，学院
				   一行赴高博教育管理（苏州）有限公司进行调研，实地
				   考察苏州软件（微软技术）实训基地。并与公司负责人
				   进行深入交流，探索创新实施校企合作体制下就业实习实
				   训工作开展机制。同时，就在校学生的创新创业能力培养，
				   进行了探讨。随后，调研组前往同程网络科技股份有限公
				   司实地考察。</p>
				</div>
				<img src={require("../css/image/dongtai3.jpeg")} alt="加载失败" className="contentimg"></img>
			</div>
		</div>
    );
  }
}

export default ActiveDetail;
