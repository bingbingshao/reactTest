import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
class PaperDetail extends Component {
  render() {
    return (
		<div className="paperindex">
            <div className="paper height323">							
                <p>1.What‘s the weather like today? it's_____。</p>
                <p>（10分）</p>				
                <div className="dashed"></div>
                <div className="paperitem">A、rain</div>
                <div className="paperitem">B、windy</div>
                <div className="paperitem">C、sun</div>							
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

export default PaperDetail;