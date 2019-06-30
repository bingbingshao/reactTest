import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
} from 'react-router-dom'
class ClassTestCount extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/classchart" NavLeft="fa fa-chevron-left" NavName="测试统计">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <div className="testlist">
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score" id="green1">已提交</div>
                    <div className="checklabel red">未批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score" id="red1">未提交</div>
                    <div className="checklabel"></div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
            <Link to="/classtestoverview" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span>
                        <p>袁同学</p>
                        <div>2012303192</div>
                    </span>
                </div>
                <div className="itempart">
                    <div className="score">100分</div>
                    <div className="checklabel blue">已批改</div>
                </div>					
            </Link>
        </div>
    </div>
    );
  }
}

export default ClassTestCount;