import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class Videodetail extends Component {
	constructor(){
		super()
		this.state={heartshow:'fa fa-heart-o',ifshow:true,tipclass:'blank longtext',tipsign:'fa fa-angle-down',ifopen:true}
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

	clickOpentip=()=>{
		this.state.ifopen=!this.state.ifopen
		if(this.state.ifopen){
			this.setState({tipclass:'blank longtext',tipsign:'fa fa-angle-down'})
		}else{
			this.setState({tipclass:'blank showlongtext',tipsign:'fa fa-angle-up'})
		}
	}
  render() {
    return (
      <div className="page">
		  	<Nav NavTitle="nav noborder" backhistory={this.backhistory}  NavLeft="fa fa-chevron-left" NavName="视频播放">
				<div className="icon"></div>
			</Nav>			
			<p className="margin45"></p>
			<div className="submod thick1">							
				<img src={require("../css/image/video.png")}  width="375px" height="220px" alt="加载失败"/>
				<div className="cell">
					<div className="videoinfoitem">
						<div className="fa fa-play-circle-o"></div>
						<div>42.2万次</div>
					</div>
					<div className="videoinfoitem">
						<div className="heartclick" onClick={this.heartclick}>
							<span className={this.state.heartshow}></span>
						</div>
						<span className="fa fa-share-alt"></span>
					</div>
				</div>
				<div className="content">
					<div className="contenttext textb2-14">					
					   <p className={this.state.tipclass}>下午，学院一行赴高博教育管理（苏州）有限
					   公司进行调研，实地考察苏州软件（微软技术）实训基地。并与
					   公司负责人进行深入交流，探索创新实施校企合作体制下就业实
					   习实训工作开展机制。同时，就在校学生的创新创业能力培养，
					   进行了探讨。随后，调研组前往同程网络科技股份有限公司实地
					   考察下午，学院一行赴高博教育管理（苏州）有限
					   公司进行调研，实地考察苏州软件（微软技术）实训基地。并与
					   公司负责人进行深入交流，探索创新实施校企合作体制下就业实
					   习实训工作开展机制。同时，就在校学生的创新创业能力培养，
					   进行了探讨。随后，调研组前往同程网络科技股份有限公司实地
					   考察</p>			
					   <p className="moretext" id="blue1" onClick={this.clickOpentip}>
					   		<span className={this.state.tipsign} id="blue1"></span>
					   </p>
					</div>					
							
				</div>
			</div>
			
			<div className="submod">
				<div className="cell">
					<div className="videotime">
						<p>用时：5&nbsp;分</p>
						<p>得分：75</p>
					</div>
					<div className="videotime">
						<p>用时：5&nbsp;分</p>
						<p>得分：75</p>
					</div>
					<div className="videotime checked">
						<p>用时：5&nbsp;分</p>
						<p>得分：75</p>
					</div>
				</div>
				<Link to="/record" className="confirmbtn">
					<span className="green">行为记录</span>
				</Link>
			<p>&nbsp;</p>
			</div>
		</div>
    );
  }
}

export default Videodetail;