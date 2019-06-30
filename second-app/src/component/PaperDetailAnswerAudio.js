import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
class PaperDetailAnswerAudio extends Component {
	constructor(){
		super()
		this.state={heartshow:'fa fa-heart-o',ifshow:true}
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
		<div className="paperindex">
            <div className="paper height323">							
					<p>3.请读出下面这句话：</p>
					<p>&nbsp;</p>				
					<div className="dashed"></div>
					<p><span className="textb2-14">如果你无法简洁的表达你的想法，那只说明你还不够了解它。</span></p>
					<p><span className="textb2-14">-- 阿尔伯特·爱因斯坦</span></p>	
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<div className="confirmbtn">
						<p></p>
						<span className="per45">
							<div className="fa fa-microphone"></div>
							开始录音
						</span>
						<span className="per45 ">
							<div className="fa fa-volume-down"></div>
							播放录音
						</span>				
					</div>			
					<div className="heartclick collect" onClick={this.heartclick}>
							<span className={this.state.heartshow}></span>
						</div>
				</div>
				<div className="paperinfo">
					<span>确认：<div className="red">未确认</div> </span>
					<span>提交：<div className="red">未提交</div> </span>
				</div>
        </div>
    );
  }
}

export default PaperDetailAnswerAudio;