import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import{
    Link
}from 'react-router-dom'
class TestList extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/teacher" NavLeft="fa fa-chevron-left" NavName="试卷管理">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <FilterList />
        <div className="testlist">       
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
            <Link to="/testdetail1" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>语文第六单元阅读理解</p>
                        <div className="tip">2017-01-17</div>
                    </span>
                </div>					
                <div className="itempart">
                    <span className="right">
                        <p>上学期</p>
                        <p>一年级一班</p>
                    </span>
                </div>
            </Link>
        </div>
    </div>
    );
  }
}

export default TestList;