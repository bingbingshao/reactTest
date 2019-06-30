import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import FilterList from '../component/FilterList.js';
import Nav from '../component/Nav.js';
import{
    Link
}from 'react-router-dom'
class ExamCollect extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/studentmenu" NavLeft="fa fa-chevron-left" NavName="我的收藏">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <FilterList />
        <div className="testlist">
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
            <Link to="/testpractice" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                    </span>
                </div>
                <div className="itempart">
                    <div className="surebtn">订正</div>
                </div>					
            </Link>
        </div>
        <p className="margin70"></p>
    </div>

    );
  }
}

export default ExamCollect;