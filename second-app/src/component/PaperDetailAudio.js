import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
class PaperDetailAudio extends Component {
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
						<span className="per80">
							<div className="fa fa-volume-down"></div>
							播放录音
						</span>					
					</div>														
			</div>			
            <div className="paperinfo">
                <span>答案：A</span>
            </div>           
            <div className="paperinfo">
                <span className="blue">得分：</span>
                <input type="text" placeholder="输入得分" ></input>
            </div>
            <div className="paperinfo">
                <span className="blue">评价：</span>
                <input type="text" placeholder="输入评语" ></input>
            </div>
        </div>
    );
  }
}

export default PaperDetailAudio;