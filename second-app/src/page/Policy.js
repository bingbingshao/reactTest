import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class Policy extends Component {
  render(){
  	return (
			<div className="page">
				<Nav NavTitle="nav noborder" back={this.props} backto="/setting" NavLeft="fa fa-chevron-left" NavName="隐私策略">
					<div className="icon"></div>
				</Nav>
				<p className="margin45"></p>
				<div className="content">
					<div className="contenttitle">
						<span className="textb1-16">隐私策略相关内容</span>	
					</div>
					<div className="contenttext textb2-14">
					   <span><p className="blank">为了进一步掀起学习、
					   遵守、贯彻、维护党章、廉洁自律准则和纪律处分
					   条例教育活动的高潮，践行“两学一做”，使广大党
					   员更加全面、准确、深入地学习、党章、廉洁自律
					   准则和纪律处分条例，进一步增强监督意识和纪律观
					   念，2016年11月29日中午，我院教工党支部在学院会
					   议室开展了学习党章知识竞赛活动。</p></span>
					   <span><p className="blank">为了进一步掀起学习、
					   遵守、贯彻、维护党章、廉洁自律准则和纪律处分
					   条例教育活动的高潮，践行“两学一做”，使广大党
					   员更加全面、准确、深入地学习、党章、廉洁自律
					   准则和纪律处分条例，进一步增强监督意识和纪律观
					   念，2016年11月29日中午，我院教工党支部在学院会
					   议室开展了学习党章知识竞赛活动。</p></span>
					   <span><p className="blank">为了进一步掀起学习、
					   遵守、贯彻、维护党章、廉洁自律准则和纪律处分
					   条例教育活动的高潮，践行“两学一做”，使广大党
					   员更加全面、准确、深入地学习、党章、廉洁自律
					   准则和纪律处分条例，进一步增强监督意识和纪律观
					   念，2016年11月29日中午，我院教工党支部在学院会
					   议室开展了学习党章知识竞赛活动。</p></span>
					</div>			
				</div>
			</div>
  		);
  }
}

export default Policy;