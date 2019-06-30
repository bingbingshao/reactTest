import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import{
    Link
}from 'react-router-dom'
class AbleExam extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/studentmenu" NavLeft="fa fa-chevron-left" NavName="可参加考试列表">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <FilterList />
        <div className="testlist">   
            <Link to="/stupageoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文测试</p>
                        <p>考试时间：2017-12-12</p>
                        <p>科目：<span className="tip">语文</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/stupageoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文测试</p>
                        <p>考试时间：2017-12-12</p>
                        <p>科目：<span className="tip">语文</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/stupageoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文测试</p>
                        <p>考试时间：2017-12-12</p>
                        <p>科目：<span className="tip">语文</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/stupageoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文测试</p>
                        <p>考试时间：2017-12-12</p>
                        <p>科目：<span className="tip">语文</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/stupageoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文测试</p>
                        <p>考试时间：2017-12-12</p>
                        <p>科目：<span className="tip">语文</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
        </div>
        <p className="margin45"></p>
    </div>
    );
  }
}

export default AbleExam;