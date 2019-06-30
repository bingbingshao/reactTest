import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NewsAudio extends Component {
  render() {
    return (         
        <div className="submod">
            <div className="cell">
                <div className="textb1-14">愉悦口语:第182期 别闹了英文怎么说好听(音频)</div>
            </div>
            <div className="cell">
                <audio controls="controls">
                    <source src={require("../css/image/1.mp3")} alt="加载失败"/>					  				  
                </audio>
            </div>
            <div className="cell">
                <div className="cellnote">
                    <div>上海交通大学新闻部</div>
                    <div>2017-7-12&nbsp;12:00</div>
                </div>
                <div className="cellnote">
                    <div className="fa fa-eye"></div>
                    <div>1024次</div>
                </div>
            </div>
        </div>
         );
  }
}

export default NewsAudio;