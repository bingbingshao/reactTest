import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
class PaperDetailWrite extends Component {
  render() {
    return (
		<div className="paperindex">
            <div className="paper height323">							
					<p>5.假设a = 2，b = 5，c = a*b;    那么，c = ______；</p>
					<p>   √c = ______。 </p>				
					<div className="dashed"></div>
					<div className="paperitem">1、10</div>
					<Link to="/handinput" className="paperitem noborder">2、点击查看手绘答案</Link>									
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

export default PaperDetailWrite;