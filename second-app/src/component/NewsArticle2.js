import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NewsArticle2 extends Component {
  render() {
    return (        
            <div className="submod">
                <div className="cell">
                    <img src={require("../css/image/cellimg2.jpeg")} alt="加载失败" className="cellimg2"></img>
                    <div className="textb1-14 center">蓬莱渔民捕获巨型“鳝鱼王” 长1.86米重26斤,引人围观</div>
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

export default NewsArticle2;