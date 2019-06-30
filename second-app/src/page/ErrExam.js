import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
}from 'react-router-dom'
class ErrExam extends Component {
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" backhistory={this.backhistory} NavLeft="fa fa-chevron-left" NavName="错题集">
            <div className="icon"></div>
        </Nav>   
        <p className="margin45"></p>
        <div className="testlist">     
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>					
            </div>
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>						
            </div>
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>						
            </div>
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>						
            </div>
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>						
            </div>
            <div className="testitem">
                <Link to="/answerrecord" className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>16+29=（）</p>
                        <p>相关知识点：<span className="tip">数学知识</span></p>
                        <p>答错次数：<span className="tip" id="red1"><b>2</b></span></p>
                    </span>
                </Link>
                <Link to="/reductiontopic" className="itempart">
                    <div className="surebtn">订正</div>
                </Link>						
            </div>
        </div>
        <p className="margin70"></p>
    </div>

    );
  }
}

export default ErrExam;