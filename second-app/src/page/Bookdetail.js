import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class Bookdetail extends Component {
	constructor(){
		super()
		this.state={heartshow:'fa fa-heart-o',ifshow:true}
	}
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}

	heartclick=(e)=>{
		this.state.ifshow=!this.state.ifshow
		if(this.state.ifshow){
			this.setState({heartshow:'fa fa-heart-o'})
		}else{
			this.setState({heartshow:'fa fa-heart'})
		}
	}
  render() {
    return (
      <div className="page">
		   <Nav NavTitle="nav noborder"  backhistory={this.backhistory} NavLeft="fa fa-chevron-left" NavName="书本详情">
				<div className="icon"></div>
			</Nav>	
			<p className="margin45"></p>
			<div className="submod thick1">
				<div className="cell">
					<div className="cellimg4">
						<img src={require("../css/image/book3.jpeg")} alt="加载失败"/>
					</div>
					<div className="content nopadding">
						<div className="contenttext textb1-16">
							<p>二年级下册语文</p>	
						</div>
						<div className="contenttext textb2-14">
							<p>出版社：人民教育出版社</p>	
							<p>大小：10M</p>	
							<p>价格：<span id="orange1">0.00</span></p>	
						</div>
						<div className="contenttext">
							<div className="bookinfo">							
								<Link to="/bookexe"><p>开始阅读</p></Link>
								<div className="heartclick" onClick={this.heartclick}>
									<span className={this.state.heartshow}></span>
								</div>
								<span className="fa fa-share-alt"></span>
							</div>
						</div>			
					</div>
				</div>
			</div>		
			<div className="listtitle">
				<span className="textb1-14"><p>课文介绍</p></span>
			</div>
			<div className="content">
				<div className="contenttext textb2-14 tip">					
				   <span><p className="blank">课文简介：
				   课文通过介绍威尼斯小艇的样子、船夫驾驶小艇的高超
				   技术以及小艇的重要作用，为我们展示了威尼斯这座水
				   上名城特有的风光。  课文从“我”的所见所感入手，首
				   先交待了小艇是威尼斯的主要的交通工具，接着详细介
				   绍了小艇独特的构造特点，然后讲了船夫的高超驾驶技术
				   ，最后说了小艇与人们的日常生活息息相关。</p></span>
				   <span><p>1．马克·吐温：
				   美国作家，原名萨缪尔?克里斯曼。马克?吐温是他的笔名，
				   主要作品有《镀金时代》《王子与贫儿》《哈里贝利·芬历险记》
				   等。  2．威尼斯意大利的一座古城，位于欧洲亚得里亚海滨，
				   周围被海洋环绕，由118个岛屿组成，只有西北角一条长堤与大
				   陆相通，有“水城”、“百岛城”之称。全城有117条纵横交错的大
				   小河道，靠400多座桥梁把他们连结起来。威尼斯风光秀美，
				   古迹甚多，有120座哥特式、文艺复兴式、巴罗克式大教堂，
				   120座钟楼，64座修道院，40座宫殿，是驰名全球的 </p></span>
				</div>	
			</div>	
		</div>
    );
  }
}

export default Bookdetail;