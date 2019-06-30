import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NewsMap extends Component {
  render() {
    return (                										
            <div className="submod">
                <div className="cell">
                    <div className="textb1-14">南京城墙用的白砖什么来头 专家解读城砖的有趣知识 惊人冷门小知识(地图)</div>
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

export default NewsMap;