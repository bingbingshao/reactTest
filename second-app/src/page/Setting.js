import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class Setting extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/news/my" NavLeft="fa fa-chevron-left" NavName="设置">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <div className="list">
            <Link to="/resetpsd" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-key" id="orange1"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">更改密码</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <Link to="/feedback" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-hand-stop-o" id="black2"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">意见反馈</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <Link to="/score" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-heart" id="red1"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">评分</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <Link to="/policy" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-lock" id="orange1"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">隐私策略</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <Link to="/clause" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-list" id="green2"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">条款</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <Link to="/aboutus" className="listitem setting">
                <div className="icon">
                    <div className="fa fa-user-o" id="green2"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">关于我们</p>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right"></div>
                </div>
            </Link>
            <div className="listitem setting">
                <div className="icon">
                    <div className="fa fa-refresh" id="blue1"></div>
                </div>
                <div className="listtext">
                    <p className="textb1-14">清空缓存</p>
                </div>
                <div className="icon"></div>
            </div>			
        </div>
        <p className="margin45">&nbsp;</p>
        <Link to="/login" className="confirmbtn">
            <span className="red">
            退出登录
            </span>
        </Link>
        <p className="margin70"></p>
        <p className="margin70"></p>
    </div>

    );
  }
}

export default Setting;