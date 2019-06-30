import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
class SchoolIndexScenery extends Component {
  render() {
    return (   
        <div className="schoolindex">
            <div className="mod">
                <Link to="/schoolscenerydetail" className="submod">
                    <div className="cell">
                        <div className="textb1-14">教学楼风景</div>
                    </div>
                    <div className="cell">
                        <div className="textb2-12">教学楼简介教学楼
                        简介教学楼简介教学楼简介教学楼简介教学楼简
                        介教学楼简介教学楼简介教学楼简介教学楼简介
                        教学楼简介。</div>
                    </div>
                    <div className="cell">
                        <img src={require("../css/image/cellimg1_1.jpeg")} className="cellimg1"  alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_2.jpeg")} className="cellimg1"  alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_3.jpeg")} className="cellimg1"  alt="加载失败"/>
                    </div>
                    <div className="cell">
                        <div className="cellnote"></div>
                        <div className="cellnote">
                            <div className="fa fa-eye"></div>
                            <div>1024次</div>
                        </div>
                    </div>
                </Link>
                <Link to="/schoolscenerydetail" className="submod">
                    <div className="cell">
                        <div className="textb1-14">图书馆风景</div>
                    </div>
                    <div className="cell">
                        <div className="textb2-12">图书馆简介图书馆简介
                        图书馆简介图书馆简介图书馆简介图书馆简介图书馆
                        简介图书馆简介图书馆简介图书馆简介图书馆简介。</div>
                    </div>
                    <div className="cell">
                        <img src={require("../css/image/cellimg1_1.jpeg")} className="cellimg1" alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_2.jpeg")} className="cellimg1" alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_3.jpeg")} className="cellimg1" alt="加载失败"/>
                    </div>
                    <div className="cell">
                        <div className="cellnote"></div>
                        <div className="cellnote">
                            <div className="fa fa-eye"></div>
                            <div>1024次</div>
                        </div>
                    </div>
                </Link>
                <Link to="/schoolscenerydetail" className="submod">
                    <div className="cell">
                        <div className="textb1-14">篮球场风景</div>
                    </div>
                    <div className="cell">
                        <div className="textb2-12">风景简介风景简介风景
                        简介风景简介风景简介风景简介风景简介风景简介风
                        景简介风景简介风景简介风景简介风景简介风景简介
                        风景简介风景简介风景简介风景简介。</div>
                    </div>
                    <div className="cell">
                        <img src={require("../css/image/cellimg1_1.jpeg")} className="cellimg1" alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_2.jpeg")} className="cellimg1" alt="加载失败"/>
                        <img src={require("../css/image/cellimg1_3.jpeg")} className="cellimg1" alt="加载失败"/>
                    </div>
                    <div className="cell">
                        <div className="cellnote"></div>
                        <div className="cellnote">
                            <div className="fa fa-eye"></div>
                            <div>1024次</div>
                        </div>
                    </div>
                </Link>
            </div>
		</div>
    );
  }
}

export default SchoolIndexScenery;