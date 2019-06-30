import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import NewsArticle from '../component/NewsArticle.js';
import NewsArticle2 from '../component/NewsArticle2.js';
import NewsAudio from '../component/NewsAudio.js';
import NewsVideo from '../component/NewsVideo.js';
import NewsMap from '../component/NewsMap.js';
class Picture extends Component {
	constructor(){
        super();
        this.state={starshow:'fa fa-star-o',color:'blue1',ifshow:false}
    }
    clickStar=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({starshow:'fa fa-star',color:'orange1'})
        }else{
            this.setState({starshow:'fa fa-star-o',color:'blue1'})
        }
    }
  render() {
    return (
      <div className="page">
		  	<Nav NavTitle="nav noborder" back={this.props} backto="/news" NavLeft="fa fa-chevron-left" NavName="上海交通大学"> 
			  	<div className="icon" onClick={this.clickStar}>
					<div className={this.state.starshow} id={this.state.color}></div>
				</div>
			</Nav>
			<p className="margin45"></p>
			<div className="content">
				<div className="contenttitle border">
					<span className="textb1-18"><b>愉悦口语:第182期 别闹了英文怎么说好听</b></span>
					<div className="cellnote">
						<div>发布人</div>
						<div>2017-7-12</div>
					</div>
				</div>				
				<div className="contenttext">						
					<p>&nbsp;</p>
					<span><p className="textb2-14 blank">为了进一步掀起学习、
					遵守、贯彻、维护党章、廉洁自律准则和纪律处分条例教育
					活动的高潮，践行“两学一做”，使广大党员更加全面、准确、
					深入地学习、党章、廉洁自律准则和纪律处分条例，进一步
					增强监督意识和纪律观念，2016年11月29日中午，我院教工
					党支部在学院会议室开展了学习党章知识竞赛活动。</p></span>
					<img src={require("../css/image/contentimg.jpeg")} alt="加载失败" className="contentimg"></img>
				   <span><p className="textb2-14 blank">竞赛活动分三部分：必答题，
				   风险题和抢答题，教工党支部的四个党小组各派4名党员参赛，其
				   他党员作为观众。由于比赛之前党员们都进行了精心的学习准备，
				   在竞赛中竞争非常激烈，尤其是抢答题环节队员们更是争先恐后抢
				   答。经过激烈的角逐，最后实验室党小组以总分180分荣获第一名，
				   行政党小组总分170分获第二名，生工党小组和生科生技党小组分别
				   获第三、第四名。竞赛活动的最后环节还进行了观众抢答，在座的
				   党员观众争相举手回答问题，会场气氛热烈高涨。</p></span>
				   <img src={require("../css/image/contentimg.jpeg")} alt="加载失败" className="contentimg"></img>
				   <span><p className="textb2-14 blank">此次以学习党章、廉洁自律准则
				   和纪律处分条例为主要内容，现场知识竞赛为载体的学习活动，使
				   全院教职工党员熟知熟记党章、廉洁自律准则和纪律处分条例知识，
				   切实增强了党员的政治意识、大局意识、核心意识。</p></span>				 
				   <p className="margin45"></p>
				   <span className="textb1-14">分享到：</span>				   			
				</div>
			</div>
			<div className="sharemenu">
				<div className="shareitem">	
					<div>
						<div className="fa fa-weixin" id="green1"></div>	
					</div>										
					<span>微信好友</span>
				</div>
				<div className="shareitem">	
					<div>
						<img src={require("../css/image/friends.jpg")} alt="加载失败" width="32px" height="32px"/>
					</div>							
					<span>朋友圈</span>
				</div>
				<div className="shareitem">
					<div>
						<div className="fa fa-qq" id="blue1"></div>
					</div>							
					<span>QQ好友</span>
				</div>
				<div className="shareitem">
					<div>
						<img src={require("../css/image/QQZone.jpg")} alt="加载失败" width="32px" height="32px"/>
					</div>
					<span>QQ空间</span>
				</div>
			</div>
			<div className="mod">
				<div className="listtitle height35">
					<span className="textb1-14">推荐新闻</span>
				</div>
				<NewsArticle/>
				<NewsArticle2/>		
				<NewsMap/>
			</div>
			<div className="mod">
				<div className="listtitle height35">
					<span className="textb1-14">广告</span>
				</div>
				<div className="submodrow">
					<div className="submodrowleft">
						<div className="textb1-14">XXX家教广告标题</div>
						<div className="cellnote">
							<div className="ad">广告</div>
							<div>发布人</div>
						</div>
					</div>					
					<img src={require("../css/image/cell1.jpeg")} alt="加载失败"></img>
					<img src={require("../css/image/cell2.jpeg")} alt="加载失败"></img>				
				</div>
				<div className="submodrow">
					<div className="submodrowleft">
						<div className="textb1-14">XXX培训广告标题</div>
						<div className="cellnote">
							<div className="ad">广告</div>
							<div>发布人</div>
						</div>
					</div>
					<img src={require("../css/image/cell1.jpeg")} alt="加载失败"></img>
					<img src={require("../css/image/cell2.jpeg")} alt="加载失败"></img>						
				</div>
			</div>
			<p className="margin45"></p>
		</div>
    );
  }
}

export default Picture;
