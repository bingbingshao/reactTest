import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class SchoolStarDetail extends Component {
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/campusstar" NavLeft="fa fa-chevron-left" NavName="校园之星详情">
            <div className="icon"></div>
        </Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="contenttext textb2-14">	
					<div className="contenttitle border">
						<span className="textb1-18"><b>XX高中开设丰富多彩的器乐社活动</b></span>
						<div className="cellnote">
							<div>2017-7-12</div>
							<div>18:09</div>
						</div>
					</div>
           <img src={require("../css/image/contentimg.jpeg")} alt="加载失败" className="contentimg"></img>
					<span><p className=" blank">为进一步推进素质教育，促进学生全面而有个
					性的发展，本学期在团委的指导下，宏达高中开设了各种学生社团活动，
					以丰富学生课余文化生活，让学生充分发挥自己的兴趣爱好和个性特长，
					给学生创设一片自我发展的天空。随着学生自我意识的发展，个体素质的
					多元化发展，一大批社团活动应运而生。器乐社是其中一颗冉冉升起的
					新星。</p></span>
					<p>&nbsp;</p>
					<span><p className=" blank">据了解，Ukulele即夏威夷小吉他，在港台等地
					一般译作乌克丽丽，在大陆一般习惯称为尤克里里，是一种四弦夏威夷
					的拨弦乐器，发明于葡萄牙盛行于夏威夷，归属在吉他乐器一族。在这个
					小班课程里，由专业指导老师朱嘉义指导宏高的同学们弹奏吉他，同学
					们激发自己的节奏潜能，以琴会友，陶冶情操。</p></span>
					<p>&nbsp;</p>
					<span><p className=" blank">音乐不仅是丰富了同学们的高中生活，也给同学
					们提供了很多读艺术类相关学校的机会。器乐类的特长可以让你参加艺考
					，报考浙江师范大学、杭州师范大学、湖州师范学院等师范类的相关专业
					，也可以报考浙江音乐学院、南京艺术学院、解放军艺术学院等艺术类
					大学。</p></span>
					<p>&nbsp;</p>
					<span><p className=" blank">器乐社的开展，让我们的青春奏响不一样的动人
					旋律，也让我们在通向成功的道路上多了一个选择，更让宏高的特色办学
					更加丰富多彩！</p></span>
					
				</div>
			</div>
		</div>
    );
  }
}

export default SchoolStarDetail;
