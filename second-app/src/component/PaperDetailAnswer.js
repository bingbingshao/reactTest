import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
class PaperDetailAnswer extends Component {
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
                <p>1.What‘s the weather like today? it's_____。</p>
                <p>（10分）</p>				
                <div className="dashed"></div>
                <div className="paperitem checked">A、rain</div>
                <div className="paperitem">B、windy</div>
                <div className="paperitem">C、sun</div>	
                <div className="heartclick collect" onClick={this.heartclick}>
                    <span className={this.state.heartshow}></span>
                </div>				
            </div>				
            <div className="paperinfo">
                <span> 我的答案：A</span>
            </div>
            <div className="paperinfo">
                <span className="blue">得分：</span>
                <input type="text" placeholder="输入得分" ></input>
            </div>
            <div className="paperinfo">
                <span className="blue">评价：</span>
                <input type="text" placeholder=" 输入评语" ></input>
            </div>
        </div>
    );
  }
}

export default PaperDetailAnswer;