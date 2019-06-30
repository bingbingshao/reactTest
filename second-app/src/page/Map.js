import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import NewsMap from '../component/NewsMap.js';
import NewsPicture from '../component/NewsPicture.js';
import NewsArticle from '../component/NewsArticle.js';
import NewsArticle2 from '../component/NewsArticle2.js';
import NewsAudio from '../component/NewsAudio.js';
import NewsVideo from '../component/NewsVideo.js';
import {
	Link
}from 'react-router-dom'

class Map extends Component {
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
					<span className="textb1-18"><b>河南古墓挖出几大锅“牛肉汤”骨头清晰可见</b></span>
					<div className="cellnote">
						<div>发布人</div>
						<div>2017-7-12</div>
					</div>
				</div>
				
				<div className="contenttext">	
					<img src={require("../css/image/contentimg.jpeg")} alt="加载失败" className="contentimg"></img>
				   <span><p className="textb2-14 blank">12月14日，据@河南考古官方
				   微博透露，在河南一座楚墓发掘现场，考古人员现场
				   挖出了几只装有“肉汤”大鼎，鼎内骨头清晰可见。经
				   专家鉴定，里面煮的都是牛的前肢！这是妥妥的几锅“
				   牛肉汤”啊。近日在河南一座古墓发掘现场，出土了几只
				   装有“肉汤”大鼎，鼎内骨头清晰可见。经专家初步鉴定，
				   锅里煮的都是牛的前肢!这是妥妥的几锅“牛肉汤”啊！</p></span>
				   <span><p className="textb2-14 blank">12月14日，据@河南考古官方
				   微博透露，在河南一座楚墓发掘现场，考古人员现场
				   挖出了几只装有“肉汤”大鼎，鼎内骨头清晰可见。经
				   专家鉴定，里面煮的都是牛的前肢！这是妥妥的几锅“
				   牛肉汤”啊。近日在河南一座古墓发掘现场，出土了几只
				   装有“肉汤”大鼎，鼎内骨头清晰可见。经专家初步鉴定，
				   锅里煮的都是牛的前肢!这是妥妥的几锅“牛肉汤”啊！</p></span>
				   <span><p className="textb2-14 blank">12月14日，据@河南考古官方
				   微博透露，在河南一座楚墓发掘现场，考古人员现场
				   挖出了几只装有“肉汤”大鼎，鼎内骨头清晰可见。经
				   专家鉴定，里面煮的都是牛的前肢！这是妥妥的几锅“
				   牛肉汤”啊。近日在河南一座古墓发掘现场，出土了几只
				   装有“肉汤”大鼎，鼎内骨头清晰可见。经专家初步鉴定，
				   锅里煮的都是牛的前肢!这是妥妥的几锅“牛肉汤”啊！</p>
				   
				   </span>
				   <span><p className="textb2-14 blank">不过，这些考古
				   发掘出的器物具体是什么，还有待小编打探，继续关注吧！</p></span>				 
				   
				   <p className="margin45"></p>
				   <Link to="/bigmap">
						<div className="contentmap"></div>
				   </Link>
				   
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
                        <img src={require("../css/image/QQZone.jpg")} alt="加载失败" width="32px" height="32px"></img>
					</div>
					<span>QQ空间</span>
				</div>
			</div>	
			<div className="mod">
				<div className="listtitle height35">
					<span className="textb1-14">推荐新闻</span>
				</div>
				<NewsArticle2/>
				<NewsMap/>
				<NewsAudio/>
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

export default Map;
