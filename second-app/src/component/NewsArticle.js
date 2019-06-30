import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
class NewsArticle extends Component {
  render() {
    return (
            <Link to="/picture"  className="submod">
                <div className="cell">
                    <div className="textb1-14">2016年度汉字词公布“规”“小目标”上榜</div>
                </div>
                <div className="cell">
                    <img src={require("../css/image/cellimg1_1.jpeg")} alt="加载失败" className="cellimg1"></img>
                    <img src={require("../css/image/cellimg1_2.jpeg")} alt="加载失败" className="cellimg1"></img>
                    <img src={require("../css/image/cellimg1_3.jpeg")} alt="加载失败" className="cellimg1"></img>
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
            </Link>
         );
  }
}

export default NewsArticle;