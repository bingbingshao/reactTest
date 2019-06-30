import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import NavBlack from '../component/NavBlack.js';
class Video extends Component {
	constructor(){
        super();
        this.state={starshow:'fa fa-star-o',ifshow:false}
    }
    clickStar=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({starshow:'fa fa-star'})
        }else{
            this.setState({starshow:'fa fa-star-o'})
        }
    }
  render() {
    return (
      <div className="page">
			<div click={this.props} className="blackpart">
				<NavBlack NavName="上海交通大学" back={this.props} backto="/news" >
					<div className="icon" onClick={this.clickStar}>
					<div className={this.state.starshow}></div>
				</div>
				</NavBlack>
				<p className="margin45"></p>
				<div className="video">
					<video>
					</video>
				</div>			
				<div className="contentblack">
					<div className="contenttitle-black">
						<b>上海交通大学校景展示，不一样的美</b>
					</div>
					<span><p className="blank">为了进一步掀起学习、
					遵守、贯彻、维护党章、廉洁自律准则和纪律处分条例教育
					活动的高潮，践行“两学一做”，使广大党员更加全面、准确、
					深入地学习、党章、廉洁自律准则和纪律处分条例，进一步
					增强监督意识和纪律观念，2016年11月29日中午，我院教工
					党支部在学院会议室开展了学习党章知识竞赛活动。</p></span>
				</div>				
			</div>
		</div>
    );
  }
}

export default Video;
