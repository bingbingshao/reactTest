import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
class SchoolIndexIntro extends Component {
  render() {
    return (   
        <div className="schoolindex">
            <div className="indeximg">
                <img src={require("../css/image/newsimg2.jpeg")} className="show"  alt="加载失败"/>			
            </div>
            <div className="content">
                <div className="contenttext">	
                    <span><p className="textb2-14 blank">上海交通大学
                    是我国历史最悠久、享誉海内外的高等学府之一，是
                    教育部直属并与上海市共建的全国重点大学。经过121
                    年的不懈努力，上海交通大学已经成为一所“综合性、
                    研究型、国际化”的国内一流、国际知名大学。</p></span>		
                    <span><p className="textb2-14 blank">十九世纪末，
                    甲午战败，民族危难。中国近代著名实业家、教育家
                    盛宣怀和一批有识之士秉持“自强首在储才，储才必先
                    兴学”的信念，于1896年在上海创办了交通大学的前身
                    ——南洋公学。建校伊始，学校即坚持“求实学，务实业”
                    的宗旨，以培养“第一等人才”为教育目标，精勤进取，
                    笃行不倦，在二十世纪二三十年代已成为国内著名的高
                    等学府，被誉为“东方MIT”。抗战时期，广大师生历尽艰
                    难，移转租界，内迁重庆，坚持办学，不少学生投笔从戎,
                    浴血沙场。解放前夕，广大师生积极投身民主革命，学
                    校被誉为“民主堡垒”。</p></span>
                    <span><p className="textb2-14 blank">新中国成立初期，
                    为配合国家经济建设的需要，学校调整出相当一部分优势
                    专业、师资设备，支持国内兄弟院校的发展。五十年代中
                    期，学校又响应国家建设大西北的号召，根据国务院决定，
                    部分迁往西安，分为交通大学上海部分和西安部分。1959
                    年3月两部分同时被列为全国重点大学，7月经国务院批准
                    分别独立建制，交通大学上海部分启用“上海交通大学”校
                    名。历经西迁、两地办学、独立办学等变迁，为构建新中
                    国的高等教育体系，促进社会主义建设做出了重要贡献。
                    六七十年代，学校先后归属国防科工委和六机部领导，积
                    极投身国防人才培养和国防科研，为“两弹一星”和国防现
                    代化做出了巨大贡献。</p></span>
                </div>
            </div>
		</div>
    );
  }
}

export default SchoolIndexIntro;