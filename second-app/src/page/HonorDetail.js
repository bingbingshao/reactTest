import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class HonorDetail extends Component {
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/schoolhonor" NavLeft="fa fa-chevron-left" NavName="荣誉详情">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="contenttitle border">
					<span className="textb1-18"><b>我校被评为渝中区教育科研先进集体</b></span>
					<div className="cellnote">
						<div>2017-7-12</div>
						<div>18:09</div>
					</div>
				</div>
				<div className="contenttext textb2-14">					
				   <p className="blank">（巴蜀网  周刘波）12月16日，重庆市渝中区“十二五”
				   教育科研总结及表彰大会暨渝中区教育学会2016年学术年会在渝中区中
				   华路小学举行，会议围绕渝中区教育科研工作为核心，进行了总结与部署。</p>
				   <p>我校荣获渝中区“十二五”教育科研先进集体，受到大会的
				   表彰。此外，我校还有熊丙章等六位老师被评为渝中区“十二五”教育科研
				   先进个人，《四指定脱离实际  有碍实验创新》等论文获得渝中区“十二五”
				   教育科研优秀成果。</p>
				   <p>过去一年，我校教育科研氛围日益浓厚，教育科研品质不断提高，
				   教育科研质量得到提升。技术、语文、生物三个学科成功申报重庆市普通
				   高中课程创新基地。1项课题被立项为中国教育学会规划课题，6项课题被
				   重庆市教委立项为重庆市普通高中教育教学改革研究课题的重大课题、重
				   点课题和一般课题；9项课题立项为重庆市教育科学规划课题重点课题和一
				   般课题；6项课题被重庆市教育学会立项，上述课题立项的级别和数量均居
				   于重庆市中小学第一位。《俊朗少年养成教育》（负责人：邓履虹）、《餐
				   桌上的科学》（负责人：禹云霜）、《重庆古迹、遗址寻踪》（负责人：吴树
				   才）、《高中生职业生涯规划》（负责人：彭陈莲）、《优雅少女俱乐部》
				   （负责人：王红英）、《生命科技与伦理道德》（负责人：季鑫）、《巴渝文化探究》
				   （负责人：周刘波）、《模拟联合国》（负责人：孙一民）、《插花艺术》
				   （负责人：王进）被评为重庆市精品选修课，数量均居全市第一。高中语文张学
				   忠名师工作室被评为重庆市名师工作室。走班制、综合实践活动、研究性学习
				   、研学旅行有序推进。“三元一区动态发展课堂教学方式改革”试点成果获得重庆
				   市首届教育领域综合改革成果奖中学组第一名，12项成果获得重庆市基础教育著
				   述奖（其中2项一等奖），论文获得全国一等奖10项，论文获得重庆市一等奖
				   （含特等奖）34项，全国中文核心期刊发表学术论文16篇，赛课（含微课）
				   及教师技能大赛获得全国一等奖17项，重庆市一等奖（特等奖）39项。各类获
				   奖的级别和数量、核心期刊发表论文的数量在重庆市中小学中均居于全市第一 。</p>	
				</div>
			</div>
		</div>
    );
  }
}

export default HonorDetail;
